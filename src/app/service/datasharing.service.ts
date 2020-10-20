import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  private showFormEvent: BehaviorSubject<boolean> = new BehaviorSubject(null);
  itemshowFormEvent = this.showFormEvent.asObservable();

  private isEventBuild: BehaviorSubject<boolean> = new BehaviorSubject(null);
  itemisEventBuild = this.showFormEvent.asObservable();

  constructor() { }

  setShowFormEvent(value : boolean) {
    this.showFormEvent.next(value);
  }
  getShowFormEvent() : boolean{
    return this.showFormEvent.value;
  }
  setIsEventBuild(value : boolean) {
    this.isEventBuild.next(value);
  }
  getIsEventBuild() : boolean{
    return this.isEventBuild.value;
  }

}
