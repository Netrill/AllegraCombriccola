import { Component, OnInit } from '@angular/core';
declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {

    var map;
    const longitudineRoma = 12.496366;
    const latidudineRoma = 41.902782;
    const maxLongitude = 20;
    const minLongitude = 6;
    const maxLatitude = 50;
    const minLatitude = 33;

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

    map = new ol.Map({
      layers: [background,base,clipLayer],
      target: 'map',
      view: new ol.View({
        center: ol.proj.fromLonLat([longitudineRoma,latidudineRoma]),
        zoom: 6,
        minZoom:6,
        maxZoom:18
      })
    });
    map.on('moveend', function() {
        var view = this.getView();
        var center = ol.proj.toLonLat(view.getCenter());
        
        if (center[0] >= maxLongitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma,latidudineRoma]));
          map.setView(view);
        }
        if (center[0] <= minLongitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma,latidudineRoma]));
          map.setView(view); 
        }
        if (center[1] >= maxLatitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma,latidudineRoma]));
          map.setView(view);
        }
        if (center[1] <= minLatitude)  {
          view.setCenter(ol.proj.fromLonLat([longitudineRoma,latidudineRoma]));
          map.setView(view);
        }
    });
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
}


