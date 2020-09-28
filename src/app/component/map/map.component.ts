import { MapService } from 'src/app/service/map.service';
import { GeoEvento } from './../../model/GeoEvento.model';
import { Component, OnInit } from '@angular/core';
declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map : any;
  mapService : MapService;

  longitudineRoma = 12.496366;
  latidudineRoma = 41.902782;
  maxLongitude = 20;
  minLongitude = 6;
  maxLatitude = 50;
  minLatitude = 33;
  constructor(mapService : MapService) { 
    this.mapService = mapService;
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
    var circle = new ol.geom.Circle (100,100,100) ;

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
        maxZoom:18
      })
    });
    this.map.on('moveend', function() {
        var view = this.getView();
        var center = ol.proj.toLonLat(view.getCenter());
        /*
        if (center[0] >= maxLongitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma,latidudineRoma]));
          this.map.setView(view);
        }
        if (center[0] <= minLongitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma,latidudineRoma]));
          this.map.setView(view); 
        }
        if (center[1] >= maxLatitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma,latidudineRoma]));
          this.map.setView(view);
        }
        if (center[1] <= minLatitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma,latidudineRoma]));
          this.map.setView(view);
        }*/
    });


    this.mapService.setMapComponent (this);

    /*
    // The clipping geometry.
    var circleGeometry = new ol.geom.Circle(
      [1000000, 1000000], 5000000);
    // A style for the geometry.
    var fillStyle = new ol.style.Fill({color: [0, 0, 0, 0]});
    
    base.on('prerender', function (event) {
      var ctx = event.context;

      ctx.save();
      ctx.beginPath();
      var x = ctx.canvas.width / 2 - 100;
      var y = ctx.canvas.height / 2 - 100;
      ctx.ellipse(900, 600, 350, 350, Math.PI / 4, 0, 2 * Math.PI);
      ctx.clip();
      
    });*/
  }

  public addNewEventToMap (evento : GeoEvento) {
    const punto = ol.proj.fromLonLat([evento.lng,evento.lat]);
    const marker = new ol.geom.Point([evento.lng, evento.lat]);
    const featureMarker = new ol.Feature({
        geometry: new ol.geom.Point(punto),
    });


    const marKerImage = 'assets/simpleMarker.png';
    const styleMarker = new ol.style.Style({
      image : new ol.style.Icon(
      ({
        anchor : [ 0.5, 10 ],
        anzchorXUnits : 'fraction',
        anchorYUnits : 'pixels',
        opacity : 0.75,
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
  });
  this.map.addLayer(vector);
  alert('fine');
  }
}


