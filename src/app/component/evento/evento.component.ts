import { DatasharingService } from './../../service/datasharing.service';
import { GeoEvento } from './../../model/GeoEvento.model';

import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EventService } from 'src/app/service/event.service';
import { MapService } from 'src/app/service/map.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, EmailValidator  } from '@angular/forms';
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
  formBuilder: FormBuilder;
  immaginiCaricate: File[];

  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  
  constructor( private eventService: EventService,public datepipe: DatePipe,mapService : MapService,private datasharing : DatasharingService) { 
    this.datasharing.itemshowFormEvent.subscribe(showForm => this.showForm = showForm);
  }


  ngOnInit(): void {
    this.eventForm = new FormGroup({
      name: new FormControl(this.nomeEvento, [
        Validators.required,
        Validators.minLength(4)
      ]),
      url: new FormControl (this.url,[
        Validators.required, Validators.pattern(this.reg)])
    });
  }
  onSubmit(): void {
    
  }


  mergeTimestamp( data : string , ora : string) {
    let giorno = new Date(data);
    return this.datepipe.transform(new Date (giorno.toDateString() + ' ' + ora), 'HH:mm:ss dd/MM/yyyy') 
  }
  get name() { return this.eventForm.get('name'); }

  addEvent() {
    this.inizio = this.mergeTimestamp(this.dataInizio,this.orarioInizio);
    this.fine = this.mergeTimestamp(this.dataFine,this.orarioFine);
    this.eventService.createNewEvent(this.nomeEvento,this.url,this.via,this.citta,this.cap,this.provincia,this.regione,this.tel,this.email,this.inizio,this.fine,this.descrizione,this.immaginiCaricate);
    this.eventService.addEventToMap(this.eventService.getEvento(),true,true);
  }
  showEventForm(isVisible:boolean) {
    this.datasharing.setShowFormEvent(isVisible);
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
