import { MapComponent } from './../component/map/map.component';
import { GeoEvento } from './../model/GeoEvento.model';
import { Injectable } from '@angular/core';
import { SavedEvent } from '../model/SavedEvento';

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
  addEventToMap (evento : GeoEvento, interation: boolean) {
    this.mapComponent.addNewEventToMap (evento, interation);
  }
  setCenterAndZoomOnNewEvent (evento: GeoEvento) {
    this.mapComponent.setCenterAndZoomOnNewEvent (evento);
  }
  zoomIn() {
    this.mapComponent.zoomIn ();
  }
  zoomOut () {
    this.mapComponent.zoomOut ();
  }
  setmarkersVisibility(visibility: boolean) {
    this.mapComponent.setMarkersVisibility(visibility);
  }
  openClickedEvent(data: SavedEvent): void {
    this.mapComponent.openClickedEvent(data);
  }
}
