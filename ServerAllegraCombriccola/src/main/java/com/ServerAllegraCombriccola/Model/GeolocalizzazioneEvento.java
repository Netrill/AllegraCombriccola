package com.ServerAllegraCombriccola.Model;

import java.util.Date;

public class GeolocalizzazioneEvento {
	private long id;
	private String nome;
	private String url;
	private Date inizio;
	private Date fine;
	private double lng;
	private double lat;
	private String via;
	private String citta;
	private String descrizione;
	
	public GeolocalizzazioneEvento () {}
	
	public GeolocalizzazioneEvento(double i, double j) {
		this.lng=i;
		this.lat=j;
	}
	public GeolocalizzazioneEvento(long id ,double i, double j) {
		this.lng=i;
		this.lat=j;
		this.id=id;
	}

	public double getLng() {
		return lng;
	}

	public void setLng(double lng) {
		this.lng = lng;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getVia() {
		return via;
	}

	public void setVia(String via) {
		this.via = via;
	}

	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Date getInizio() {
		return inizio;
	}

	public void setInizio(Date inizio) {
		this.inizio = inizio;
	}

	public Date getFine() {
		return fine;
	}

	public void setFine(Date fine) {
		this.fine = fine;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	
	
}	 
