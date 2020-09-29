import { MapService } from 'src/app/service/map.service';
import { GeoEvento } from './../../model/GeoEvento.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map : any;
  mapService : MapService;
  eventService : EventService;

  longitudineRoma = 12.496366;
  latidudineRoma = 41.902782;
  maxLongitude = 20;
  minLongitude = 6;
  maxLatitude = 50;
  minLatitude = 33;
  constructor(mapService : MapService, eventService : EventService) { 
    this.mapService = mapService;
    this.eventService = eventService;
  }

  ngOnInit(): void {
    

    var base = new ol.layer.Tile({
      source: new ol.source.OSM(),
    });
    /*
    var clipLayer = new ol.layer.Vector({
      style: null,
      source: new ol.source.Vector({
        url: 'assets/italy.geojson',
        format: new ol.format.GeoJSON(),
      }),
    });

     //Giving the clipped layer an extent is necessary to avoid rendering when the feature is outside the viewport
    clipLayer.getSource().on('addfeature', function () {
      base.setExtent(clipLayer.getSource().getExtent());
    });
    */
    

    var style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'black',
      }),
    });
    this.map = new ol.Map({
      layers: [base],
      target: 'map',
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitudineRoma,this.latidudineRoma]),
        zoom: 6,
        minZoom:6,
        maxZoom:18
      })
    });
    this.map.on('moveend', function() {
        var view = this.getView();
        var center = ol.proj.toLonLat(view.getCenter());
  
        if (center[0] >= this.maxLongitude)  {
          view.setCenter(ol.proj.fromLonLat([this.longitudineRoma,this.latidudineRoma]));
          this.map.setView(view);
        }
        if (center[0] <= this.minLongitude)  {
          view.setCenter(ol.proj.fromLonLat([this.longitudineRoma,this.latidudineRoma]));
          this.map.setView(view); 
        }
        if (center[1] >= this.maxLatitude)  {
          view.setCenter(ol.proj.fromLonLat([this.longitudineRoma,this.latidudineRoma]));
          this.map.setView(view);
        }
        if (center[1] <= this.minLatitude)  {
          view.setCenter(ol.proj.fromLonLat([this.longitudineRoma,this.latidudineRoma]));
          this.map.setView(view);
        }
    });

    this.mapService.setMapComponent (this);
    this.eventService.setSavedEvents();
    
  }
  public setCenterOfMap (evento) {
    this.map.getView().setCenter(ol.proj.transform([evento.lng, evento.lat], 'EPSG:4326', 'EPSG:3857'));
    this.map.getView().setZoom(18);
  }
  public addNewEventToMap (evento : GeoEvento) {
    const punto = ol.proj.fromLonLat([evento.lng,evento.lat]);
    const marker = new ol.geom.Point([evento.lng, evento.lat]);
    const featureMarker = new ol.Feature({
        geometry: new ol.geom.Point(punto),
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
      name: 'marker',
      posizione: punto,
      id: evento.id
  });
  this.map.addInteraction(draggingInteraction);
  this.map.addLayer(vector)
  }
}


