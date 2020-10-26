import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {

  showForm = false;
  nomeEvento : String = "";
  url : String = "";
  via : String = "";
  citta : String = "";
  cap : Number ;
  provincia : String ;
  regione : String ;
  tel : Number;
  email : String = "";
  dataInizio : string = "";
  orarioInizio : string = "";
  dataFine : string = "";
  orarioFine : string = "";
  inizio : string;
  fine : string;
  descrizione : String = "";
  imageLoader : any;
  constructor() { }

  ngOnInit(): void {

  }

}
