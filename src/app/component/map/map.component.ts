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
    
    

    //A distinct className is required to use another canvas for the background
    var background = new ol.layer.Tile({
      className: 'stamen',
      source: new ol.source.Stamen({
        layer: 'toner',
      }),
    });

    var base = new ol.layer.Tile({
      source: new ol.source.OSM(),
    });


    var clipLayer = new ol.layer.Vector({
      style: null,
      source: new ol.source.Vector({
        url: './data/geojson/italy.geojson',
        format: new ol.format.GeoJSON(),
      }),
    });

    var circle = new ol.geom.Circle (100,100,100) ;

   
    //Giving the clipped layer an extent is necessary to avoid rendering when the feature is outside the viewport
    clipLayer.getSource().on('addfeature', function () {
      base.setExtent(clipLayer.getSource().getExtent());
    });
    
    var style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'black',
      }),
    });
    
    base.on('postrender', function (e) {
      var vectorContext = ol.render.getVectorContext(e);
      e.context.globalCompositeOperation = 'destination-in';
      clipLayer.getSource().forEachFeature(function (feature) {
        vectorContext.drawFeature(feature, style);
      });
      e.context.globalCompositeOperation = 'source-over';
    });

    this.map = new ol.Map({
      layers: [background,base,clipLayer],
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
   /* var iconFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([this.longitudineRoma,this.latidudineRoma ])),
      name: 'Fish.1',
    });
    var iconStyle = new ol.style.Style({
      image: new ol.style.Icon({
        src: '../images/simpleMarker.png',
      }),
    });
    */

    var rome = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([evento.lng, evento.lat]))
    });
    rome.setStyle(
      new ol.style.Style({
        image: new ol.style.Icon({
          color: '#BADA55',
          crossOrigin: 'anonymous',
          // For Internet Explorer 11
          imgSize: [20, 20],
          src: '/images/simpleMarker.png',
        }),
      })
    );
   
    
    var vectorSource = new ol.source.Vector({
      features: [rome],
    });
    
    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
    });
    this.map.addLayer(vectorLayer);
    alert('fin qui 3');
    
    /*
    
    let layer = new ol.layer.Vector({
      style: new ol.style.Style({
        image : new ol.style.Icon( {
         
        })
      })

    });*/

  }
}


