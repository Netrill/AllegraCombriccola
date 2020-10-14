import { GeoEvento } from './../../model/GeoEvento.model';

import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EventService } from 'src/app/service/event.service';
import { MapService } from 'src/app/service/map.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { FormEvento } from 'src/app/model/FormEvento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  showForm = false;

  @Input() nomeEvento : String = "";
  url : String = "";
  @Input() via : String = "";
  @Input() citta : String = "";
  @Input() cap : Number ;
  @Input() provincia : String ;
  @Input() regione : String ;
  @Input() tel : Number;
  @Input() email : String = "";
  @Input() dataInizio : string = "";
  @Input() orarioInizio : string = "";
  @Input() dataFine : string = "";
  @Input() orarioFine : string = "";
  @Input() inizio : string;
  @Input() fine : string;
  @Input() descrizione : String = "";
  @Input() imageLoader : any;

  eventForm: FormGroup;
  form: FormGroup;
  formBuilder: FormBuilder;
  immaginiCaricate: File[];
  
  constructor( private eventService: EventService,public datepipe: DatePipe,mapService : MapService) { 
  }

  ngOnInit(): void {
    this.formBuilder = new FormBuilder ();
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
  onSubmit(): void {
    
  }


  mergeTimestamp( data : string , ora : string) {
    let giorno = new Date(data);
    return this.datepipe.transform(new Date (giorno.toDateString() + ' ' + ora), 'HH:mm:ss dd/MM/yyyy') 
  }

  addEvent() {
    this.inizio = this.mergeTimestamp(this.dataInizio,this.orarioInizio);
    this.fine = this.mergeTimestamp(this.dataFine,this.orarioFine);
    this.eventService.createNewEvent(this.nomeEvento,this.url,this.via,this.citta,this.cap,this.provincia,this.regione,this.tel,this.email,this.inizio,this.fine,this.descrizione,this.immaginiCaricate);
    this.eventService.addEventToMap(this.eventService.getEvento(),true,true);
  }
  showEventForm(isVisible:boolean) {
    this.showForm=isVisible;
  }

  processFile(imageInput:any) {
    let immagini : File [];
    if (imageInput.files.length>3) {
      alert("E' possibile caricare solo un massimo di 3 immagini");
      this.imageLoader = [];
    }
    else {
      let immagini: File[] = [];
      Array.from (imageInput.files).forEach (function (immagine : File) {
          immagini.push(immagine);
        });
        this.immaginiCaricate=immagini;
      }
  }       
}
