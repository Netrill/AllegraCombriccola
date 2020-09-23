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
  dataInizio = new Date () ;
  orarioInizio = new Date () ;
  dataFine = new Date () ;
  orarioFine = new Date () ;


  constructor(eventService : EventService) { }

  ngOnInit(): void {
  }
  mergeTimestam( data : Date , orario : Date) {
    data.setHours(orario.getHours());;
    data.setMinutes(orario.getMinutes());
    data.setSeconds(orario.getSeconds());
    return data;
  }

  addEvent() {
    alert(this.mergeTimestam(this.dataInizio,this.orarioInizio));
  }
}
