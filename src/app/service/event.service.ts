
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  messageSubject = new Subject();
  client : HttpClient;
  response : any;
  error : any;
  constructor(httpClient : HttpClient) { 
    this.client = httpClient;
  }
  createMap() {
    this.messageSubject.next();
  }

	//Coordinata putEvent (@RequestParam String nome,@RequestParam (required = false) String  url,@RequestParam Date inizio,@RequestParam Date fine,@RequestParam String via,@RequestParam String citta,@RequestParam String cap,@RequestParam String provincia,@RequestParam String regione,@RequestParam String descrizione,@RequestParam (required=false) String immagine) {


  createNewEvent(nome , url, via, citta, cap, provincia, regione, tel, email, inizio, fine, descrizione) {
    
    // Parameters obj-
   
    alert(nome);
    let body = new HttpParams();
    body = body.set('nome', nome).set('url',url).set('via',via).set('citta',citta).set('cap',cap).set('provincia',provincia).set('regione',regione)
          .set('tel',tel).set('email',email).set('inizio',inizio).set('fine',fine).set('descrizione',descrizione);

    alert(this.client.post('http://localhost:8080/event/put', body, {headers: {}}).subscribe());

  }
}
