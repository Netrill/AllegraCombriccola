import { EventService } from './service/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { MapComponent } from './component/map/map.component';
import { EventoComponent } from './component/evento/evento.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EventService, HttpClient,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
