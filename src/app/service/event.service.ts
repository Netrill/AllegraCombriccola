
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  messageSubject = new Subject();
  client : HttpClient;
  constructor(httpClient : HttpClient) { 
    this.client = httpClient;
  }
  createMap() {
    this.messageSubject.next();
  }

	//Coordinata putEvent (@RequestParam String nome,@RequestParam (required = false) String  url,@RequestParam Date inizio,@RequestParam Date fine,@RequestParam String via,@RequestParam String citta,@RequestParam String cap,@RequestParam String provincia,@RequestParam String regione,@RequestParam String descrizione,@RequestParam (required=false) String immagine) {


  createNewEvent(nome , url, via, citta, cap, provincia, regione, tel, email, inizio, fine, descrizione) {
    const body = 
    { 
      'nome': nome,
      'url': url,
      'via': via,
      'citta': citta,
      'cap': cap,
      'provincia': provincia,
      'regione': regione,
      'tel': tel,
      'email': email,
      'inizio': inizio,
      'fine': fine,
      'descrizione': descrizione
    };
    return this.client.post <any>('http://localhost:8080/event/put', body,{}).subscribe(data => {});
  }
}
