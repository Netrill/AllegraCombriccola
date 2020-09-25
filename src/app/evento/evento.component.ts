import { EventService } from './../service/event.service';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

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
  inizio : string;
  fine : string;
  descrizione : String = "";

  eventService : EventService;

  constructor(eventService : EventService,public datepipe: DatePipe) { 
    this.eventService = eventService;

  }

  ngOnInit(): void {
  }
  mergeTimestamp( data : string , ora : string) {
    let giorno = new Date(data);
    return this.datepipe.transform(new Date (giorno.toDateString() + ' ' + ora), 'HH:mm:ss dd/MM/yyyy') 
  }

  addEvent() {
    this.inizio = this.mergeTimestamp(this.dataInizio,this.orarioInizio);
    this.fine = this.mergeTimestamp(this.dataFine,this.orarioFine);
    this.eventService.createNewEvent(this.nomeEvento,this.url,this.via,this.citta,this.cap,this.provincia,this.regione,this.tel,this.email,this.inizio,this.fine,this.descrizione);
  }
}
