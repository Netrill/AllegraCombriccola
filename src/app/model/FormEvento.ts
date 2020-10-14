export class FormEvento {
    id: number;
    nome: String;
	url: String;
    inizioEvento:Date;
    fineEvento: Date;
	via: String;
    citta: String;
    cap: Number;
	provincia: String;
	regione: String;
	descrizione: String;
    lat: number;
    lng: number;
    constructor (nome,url,inizioEvento,fineEvento,via,citta,cap,provincia,regione,descrizione,lat,lng) {
        this.nome = nome;
        this.url = url;
        this.inizioEvento = inizioEvento;
        this.fineEvento = fineEvento;
        this.via = via;
        this.citta = citta;
        this.cap = cap;
        this.provincia = provincia;
        this.regione = regione;
        this.descrizione = descrizione;
        this.lat = lat;
        this.lng = lng;
    }
}