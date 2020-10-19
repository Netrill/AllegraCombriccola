import { MapService } from 'src/app/service/map.service';
import { GeoEvento } from './../../model/GeoEvento.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { SavedEvent } from 'src/app/model/SavedEvento';
import { DomSanitizer } from '@angular/platform-browser';
declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  

  map: any;
  hideMap: boolean = false;
  makersVisiblity: boolean;
  saveButtonVisiblity: boolean = false;
  cancelButtonVisiblity: boolean = false;
  clickedId: Number;
  clickedEvent = new SavedEvent ();
  coordinateClicked: any;
  popupVisiblity: boolean;
  url: any;
  constructor(private mapService: MapService, private eventService: EventService,private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    const longitudineRoma = 12.496366;
    const latidudineRoma = 41.902782;
    const maxLongitude = 20;
    const minLongitude = 6;
    const maxLatitude = 50;
    const minLatitude = 33;

    const base = new ol.layer.Tile({
      source: new ol.source.OSM(),
    });
    const style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'black',
      }),
    });

    this.map = new ol.Map({
      layers: [base],
      target: 'map1',
      view: new ol.View({
        center: ol.proj.fromLonLat([longitudineRoma, latidudineRoma]),
        zoom: 6,
        minZoom: 6,
        maxZoom: 20
      })
    });
    const self = this;
    this.map.on('singleclick', function(evt) {
      self.coordinateClicked = evt.coordinate;
      var features = self.map.getFeaturesAtPixel(evt.pixel);
      if (features && features.length > 0) {
        var id = features[features.length - 1].getProperties()['id'];
        if(id) {
          self.eventService.getEventoById(id);
        }
      }
      else {
        self.map.getOverlays().getArray().slice(0).forEach(function(overlay) {
          self.map.removeOverlay(overlay);
        });
      }
    });  

    this.map.on('moveend', function() {
        const view = this.getView();
        const center = ol.proj.toLonLat(view.getCenter());
        if (center[0] >= maxLongitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma, latidudineRoma]));
        }
        if (center[0] <= minLongitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma, latidudineRoma]));
        }
        if (center[1] >= maxLatitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma, latidudineRoma]));
        }
        if (center[1] <= minLatitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma, latidudineRoma]));
        }
    });
    const zoomslider = new ol.control.ZoomSlider();
    this.map.addControl(zoomslider);
    this.mapService.setMapComponent (this);
    this.eventService.setSavedEvents();
  }
  openClickedEvent(data: SavedEvent) {
    const self=this;
    this.map.getOverlays().getArray().slice(0).forEach(function(overlay) {
      self.map.removeOverlay(overlay);
    });

    var popup = new ol.Overlay.Popup();
    this.map.addOverlay(popup);
    var reader = new FileReader();
      console.log(data);
      const unsafeImageUrl = URL.createObjectURL(data.image1);
      console.log(unsafeImageUrl);
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeImageUrl);
      console.log(this.url);
      popup.show(this.coordinateClicked, "<img [src]='"+this.url+"' style='width:400px; height:400px;' >");
  }
  getHtmlPopup (info) {
    return "" ;
  }

  public setCenterAndZoomOnNewEvent(evento) {
    this.map.getView().setCenter(ol.proj.transform([evento.lng, evento.lat], 'EPSG:4326', 'EPSG:3857'));
    this.map.getView().setZoom(18);
    this.setSaveButton(true);
    this.setCancelButton(true);
  }
  public addNewEventToMap(evento: GeoEvento , markerMovementInteration: boolean) {
    const punto = ol.proj.fromLonLat([evento.lng, evento.lat]);
    const featureMarker = new ol.Feature({
        geometry: new ol.geom.Point(punto),
        id: evento.id
    });
    const draggingInteraction = new ol.interaction.Translate({
      features: new ol.Collection([featureMarker])
    });

    const marKerImage = 'assets/simpleMarker.png';
    const styleMarker = new ol.style.Style({
      image : new ol.style.Icon(
      ({
        anchor : [ 0, 52 ],
        anzchorXUnits : 'fraction',
        anchorYUnits : 'pixels',
        opacity : 1,
        src : marKerImage
      }))
    });

    const vector = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [featureMarker],
      }),
      style: [styleMarker],
      name: 'marker'
    });
    this.map.addLayer(vector);
    this.map.addInteraction(draggingInteraction);
  }
  zoomIn() {
    this.map.getView().setZoom(this.map.getView().getZoom() + 1);
  }
  zoomOut() {
    this.map.getView().setZoom(this.map.getView().getZoom() + -1);
  }
  removeMarkerInteration(){
    this.map.getInteractions().pop();
  } 
  setMarkerVisibilityById(id: number, visibility: boolean) {
    this.map.getLayers().forEach(function (layer) {
      if (layer && layer.get('id')) {
        if (layer.get('id')) {
          if (visibility) {
            layer.setVisible(true);
          }
          else {
            layer.setVisible(false);
          }
        }
      }
    });
  }
  saveEvent() {
    this.setCancelButton(false);
    this.setSaveButton(false);
  }
  cancelEvent() {
    this.setCancelButton(false);
    this.setSaveButton(false)
  }
  setSaveButton(value: boolean) {
    this.saveButtonVisiblity = value;
  }
  setCancelButton(value: boolean) {
    this.cancelButtonVisiblity = value;
  }
  setMarkersVisibility( visibility: boolean ) {
    this.map.getLayers().forEach(function (layer) {
      if (layer && layer.get('name')) {
        if (layer.get('name') === 'marker') {
          if (visibility) {
            layer.setVisible(true);
          }
          else {
            layer.setVisible(false);
          }
        }
      }
    });
  }
}


