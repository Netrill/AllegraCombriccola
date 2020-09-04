import { Component, OnInit } from '@angular/core';
declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: any;
  longitudineRoma: any = 12.496366;
  latidudineRoma: any = 41.902782;
  constructor() { }

  ngOnInit(): void {

    try {
      this.map = new ol.Map({
        target: 'map',
        zoomControl: false,
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([this.longitudineRoma,this.latidudineRoma]),
          zoom: 6,
          minZoom:6
        })
        
      });
    }catch(e) {
      console.log(e);
    }
  }
}


