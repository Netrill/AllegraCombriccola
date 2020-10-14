import { EventService } from './service/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { MapComponent } from './component/map/map.component';
import { EventoComponent } from './component/evento/evento.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MapService } from './service/map.service';
import { VetrinaComponent } from './component/vetrina/vetrina.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent,
    EventoComponent,
    VetrinaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule
  ],
  providers: [EventService, HttpClient,MapService,DatePipe,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
