import { DatasharingService } from './../../service/datasharing.service';
import { MapService } from 'src/app/service/map.service';
import { GeoEvento } from './../../model/GeoEvento.model';
import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { SavedEvent } from 'src/app/model/SavedEvento';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  clickedId: string;
  clickedEvent = new SavedEvent ();
  lastGeoEventAdded : GeoEvento;
  coordinateClicked: any;
  popupVisiblity: boolean;
  longitudineRoma: number;
  latidudineRoma: number;
  maxLongitude: number;
  minLongitude: number;
  maxLatitude: number;
  minLatitude: number;
  showEventFormValue: boolean;

  constructor(private mapService: MapService, private eventService: EventService,private sanitizer: DomSanitizer,private datasharingService:DatasharingService) {
    this.longitudineRoma = 12.496366;
    this.latidudineRoma = 41.902782;
    this.maxLongitude = 20;
    this.minLongitude = 6;
    this.maxLatitude = 50;
    this.minLatitude = 33;
  }

  ngOnInit(): void {
  
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
        center: ol.proj.fromLonLat([this.longitudineRoma, this.latidudineRoma]),
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
        self.clickedId = features[features.length - 1].getProperties()['id'];
        if(self.clickedId!=="") {
          self.eventService.getEventoById(self.clickedId);
        }
      }
      else {
        self.map.getOverlays().getArray().slice(0).forEach(function(overlay) {
          self.map.removeOverlay(overlay);
        });
      }
      self.clickedId="";
    });  
    this.map.on('moveend', function() {
        const view = this.getView();
        const center = ol.proj.toLonLat(view.getCenter());
        if (center[0] >= self.maxLongitude)  {
          view.setCenter(ol.proj.fromLonLat([self.longitudineRoma, self.latidudineRoma]));
        }
        if (center[0] <= self.minLongitude)  {
          view.setCenter(ol.proj.fromLonLat([self.longitudineRoma, self.latidudineRoma]));
        }
        if (center[1] >= self.maxLatitude)  {
          view.setCenter(ol.proj.fromLonLat([self.longitudineRoma, self.latidudineRoma]));
        }
        if (center[1] <= self.minLatitude)  {
          view.setCenter(ol.proj.fromLonLat([self.longitudineRoma, self.latidudineRoma]));
        }
    });
    this.map.on("pointermove", function (evt) {
      var hit = this.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
          return true;
      }); 
      if (hit) {
        this.getTargetElement().style.cursor = 'pointer';
      } else {
        var a =this.getTargetElement().style.cursor;
        this.getTargetElement().style.cursor = '';
      }
  });
    this.mapService.setMapComponent (this);
    this.eventService.setSavedEvents();
  }
  openClickedEvent(data: SavedEvent) {

    const self=this;
    //Elimino eventuale popup già aperto
    this.map.getOverlays().getArray().slice(0).forEach(function(overlay) {
      self.map.removeOverlay(overlay);
    });
    //Creo il popup
    var popup = new ol.Overlay.Popup();
    this.map.addOverlay(popup);
    
    //Ci carico sopra l' immagine bypassato la sicurezza
    let objectURL = 'data:image/jpeg;base64,' + data.image2;
    const url = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(objectURL));
    
    //Mostro il popup
    popup.show(this.coordinateClicked, "<img  src="+url+" style='width:400px;height:200px;' >");
  }
  getHtmlPopup (info) {
    return "" ;
  }

  public setCenterAndZoomOnNewEvent(evento : GeoEvento) {
    this.map.getView().setCenter(ol.proj.transform([evento.lng, evento.lat], 'EPSG:4326', 'EPSG:3857'));
    this.map.getView().setZoom(18);
    this.setSaveButton(true);
    this.setCancelButton(true)
    this.setMarkerInteration(true);
    this.lastGeoEventAdded=evento;
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
    this.setMarkerInteration(false);
    
  }
  zoomIn() {
    this.map.getView().setZoom(this.map.getView().getZoom() + 1);
  }
  zoomOut() {
    this.map.getView().setZoom(this.map.getView().getZoom() + -1);
  }
  setMarkerInteration(value:boolean){
    this.map.getInteractions().forEach(function(interaction) {
      if (interaction instanceof ol.interaction.Translate) {
        interaction.setActive(value);
      }
    }, this);
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
  
    this.eventService.updateEvent(this.lastGeoEventAdded.id,this.lastGeoEventAdded.lng,this.lastGeoEventAdded.lat);
    this.setCenterAndZoomOnNewEvent(this.lastGeoEventAdded);

    this.eventService.setSavedEvents();
    this.setMarkerInteration(false);

    this.setCancelButton(false);
    this.setSaveButton(false);
  }
  cancelEvent() {
    
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitudineRoma, this.latidudineRoma]));
    view.setZoom(6); 
    
    this.eventService.setSavedEvents();
    this.setMarkerInteration(false);
    this.setCancelButton(false);
    this.setSaveButton(false);
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
  showEventForm (value: boolean) {
    this.datasharingService.setShowFormEvent(value);
    this.hideMap=true;
  }
}


