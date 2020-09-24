import { EventService } from './../service/event.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  nomeEvento : String = "";
  url : String = "";
  via : String = "";
  citta : String = "";
  cap : Number ;
  provincia : String = "";
  regione : String = "";
  tel : Number;
  email : String = "";
  dataInizio : string = "";
  orarioInizio : string = "";
  dataFine : string = "";
  orarioFine : string = "";
  inizio : Date;
  fine : Date;
  descrizione : String = "";

  eventService : EventService;

  constructor(eventService : EventService) { 
    this.eventService = eventService;

  }

  ngOnInit(): void {
  }
  mergeTimestamp( data : string , ora : string) {
    let giorno = new Date(data);
    return new Date (giorno.toDateString() + ' ' + ora);
  }

  addEvent() {
    this.inizio = this.mergeTimestamp(this.dataInizio,this.orarioInizio);
    this.fine = this.mergeTimestamp(this.dataFine,this.orarioFine);
    this.eventService.createNewEvent(this.nomeEvento,this.url,this.via,this.citta,this.cap,this.provincia,this.regione,this.tel,this.email,this.inizio,this.fine,this.descrizione);
  }
}
