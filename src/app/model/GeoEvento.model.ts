export class GeoEvento {
    id: string;
    lat: string;
    lng: string;
    constructor (id:string, lng:string,lat:string){
      this.id=id;
      this.lng=lng;
      this.lat=lat;
    }
  }