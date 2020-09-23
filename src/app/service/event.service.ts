import { MenuComponent } from './../menu/menu.component';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { MapComponent } from '../map/map.component';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  messageSubject = new Subject();
  constructor() { 
    
  }
  createMap() {
    this.messageSubject.next();
  }
}
