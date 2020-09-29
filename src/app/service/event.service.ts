import { MapService } from 'src/app/service/map.service';

import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { GeoEvento } from '../model/GeoEvento.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  messageSubject = new Subject();
  client : HttpClient;
  response = new GeoEvento();
  mapService : MapService;
  error : any;
  constructor(httpClient : HttpClient,mapService : MapService) { 
    this.client = httpClient;
    this.mapService = mapService;
  }
  createMap() {
    this.messageSubject.next();
  }

	//Coordinata putEvent (@RequestParam String nome,@RequestParam (required = false) String  url,@RequestParam Date inizio,@RequestParam Date fine,@RequestParam String via,@RequestParam String citta,@RequestParam String cap,@RequestParam String provincia,@RequestParam String regione,@RequestParam String descrizione,@RequestParam (required=false) String immagine) {


  createNewEvent(nome , url, via, citta, cap, provincia, regione, tel, email, inizio, fine, descrizione) {
    let body = new HttpParams();
    body = body.set('nome', nome).set('url',url).set('via',via).set('citta',citta).set('cap',cap).set('provincia',provincia).set('regione',regione)
          .set('tel',tel).set('email',email).set('inizio',inizio).set('fine',fine).set('descrizione',descrizione);
    this.client.post<GeoEvento>('http://localhost:8080/event/put', body, {headers: {}}).subscribe({
      next: data => this.addEventToMap (data, true),
      error: error => console.error('There was an error!', error)}
    )
  }
  addEventToMap (data: GeoEvento, setPosition: boolean) {
    this.response.id = data.id;
    this.response.lat = data.lat;
    this.response.lng = data.lng;
    this.mapService.addEventToMap(this.response);
    if (setPosition === true) {
      this.mapService.setCenterOfMap(this.response);
    }
  }

  getEvento () {
    return this.response;
  }
  setSavedEvents () {
    this.client.get<GeoEvento []>('http://localhost:8080/event/getAll').subscribe({
      next: data => data.forEach(dato => this.addEventToMap(dato,false)),
      error: error => console.error('There was an error!', error)}
    )
  }

}
