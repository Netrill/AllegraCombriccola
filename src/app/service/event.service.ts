import { MapService } from 'src/app/service/map.service';

import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { GeoEvento } from '../model/GeoEvento.model';
import { SavedEvent } from '../model/SavedEvento';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  messageSubject = new Subject();
  geoEvento = new GeoEvento (undefined,undefined,undefined);
  clickedEvent = new SavedEvent();
  error : any;

  constructor(private client : HttpClient,private mapService : MapService) { 
  }
  createMap() {
    this.messageSubject.next();
  }
 

  createNewEvent(nome,url,via,citta,cap,provincia,regione, tel, email, inizio, fine, descrizione , immaginiCaricate) {
    const formData: FormData = new FormData();
    formData.append('nome', nome) 
    formData.append('url',url)
    formData.append('via',via)
    formData.append('citta',citta)
    formData.append('cap',cap)
    formData.append('provincia',provincia)
    formData.append('regione',regione)
    formData.append('tel',tel)
    formData.append('email',email)
    formData.append('inizio',inizio)
    formData.append('fine',fine)
    formData.append('descrizione',descrizione)
    if (immaginiCaricate) {
      if (immaginiCaricate[0])
        formData.append('immagine1',immaginiCaricate[0]);
      if (immaginiCaricate[1])
        formData.append('immagine2',immaginiCaricate[1]);
      if (immaginiCaricate[2])
        formData.append('immagine3',immaginiCaricate[2]);
    }
    this.client.post<GeoEvento>('http://localhost:8080/event/put', formData, {headers: {}}).subscribe({
      next: data => this.addEventToMap (data, true,true),
      error: error => console.error('There was an error!', error)}
    )
  }

  getEvento () {
    return this.geoEvento;
  }

  addEventToMap (data: GeoEvento, setPosition: boolean, nuovoEvento: boolean) {
    this.geoEvento.id = data.id;
    this.geoEvento.lat = data.lat;
    this.geoEvento.lng = data.lng;
    if (nuovoEvento === true) {
      //Mostro solo il nuovo marker
      this.mapService.setmarkersVisibility(false);
    }
    this.mapService.addEventToMap(this.geoEvento, nuovoEvento);
    if (setPosition === true) {
      this.mapService.setCenterAndZoomOnNewEvent(this.geoEvento);
    }
  }
  updateEvent(id:string,lng:string,lat:string) {
    const formData: FormData = new FormData();
    formData.append('id', id);
    formData.append('lng',lng);
    formData.append('lat',lat);
    this.client.post<boolean>('http://localhost:8080/event/update', formData, {headers: {}}).subscribe({
      next: data => data,
      error: error => console.error('There was an error!', error)}
    )
  }

  getEventoById (id: string) {
    var params = new HttpParams();
    params = params.append('id',id);
    return this.client.get<SavedEvent>('http://localhost:8080/event/get',{'params': params}).subscribe({
      next: data => {this.mapService.openClickedEvent(data)},
      error: error => console.log(error)
    });  
  }
  setSavedEvents () {
    this.client.get<GeoEvento []>('http://localhost:8080/event/get/all').subscribe({
      next: data => data.forEach(dato => this.addEventToMap(dato,false,false)),
      error: error => console.error('Errore nel recupero di tutti gli eventi', error)}
    )
  }

}
