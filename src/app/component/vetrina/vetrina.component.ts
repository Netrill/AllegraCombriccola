import { MapService } from 'src/app/service/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vetrina',
  templateUrl: './vetrina.component.html',
  styleUrls: ['./vetrina.component.css']
})
export class VetrinaComponent implements OnInit {
  mapService : MapService;
  constructor(mapService :MapService) { 
    this.mapService=mapService;
  }

  ngOnInit(): void {
  }
  zoomInCliclked () {
    this.mapService.zoomIn();
  }
  zoomOutCliclked () {
    this.mapService.zoomOut();
  }
}
