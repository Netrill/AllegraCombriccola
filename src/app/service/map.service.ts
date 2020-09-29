import { MapComponent } from './../component/map/map.component';
import { GeoEvento } from './../model/GeoEvento.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  mapComponent : MapComponent;
  constructor() { }

  setMapComponent (mapComponent : MapComponent) {
    this.mapComponent = mapComponent;
  }
  getMap () {
    return this.mapComponent;
  }
  addEventToMap (evento: GeoEvento) {
    this.mapComponent.addNewEventToMap (evento);
  }
  setCenterOfMap (evento: GeoEvento) {
    this.mapComponent.setCenterOfMap (evento);
  }
}
