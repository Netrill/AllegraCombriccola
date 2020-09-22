package com.ServerAllegraCombriccola.Model;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Evento {
	@Id
	@GeneratedValue
	private long idEvento;
	@Column
	private String nome;
	@Column
	private String url;
	@Column
	private Date inizioEvento,fineEvento;
	@Column
	private String via;
	@Column
	private String indirizzo;
	@Column
	private String citta;
	@Column
	private String cap;
	@Column
	private String provincia;
	@Column
	private String regione;
	@Column
	private String descrizione;
	@Column
	private String immagine;
	@Column
	private double lng;
	@Column
	private double lat;

	
	public Evento () {}
	
	



	public Evento(String nome, String url, Date inizioEvento, Date fineEvento, String via, String indirizzo,
			String citta, String cap, String provincia, String regione, String descrizione,
			String immagine, double lng,double lat) {
		super();
		this.nome = nome;
		this.url = url;
		this.inizioEvento = inizioEvento;
		this.fineEvento = fineEvento;
		this.via = via;
		this.indirizzo = indirizzo;
		this.citta = citta;
		this.cap = cap;
		this.provincia = provincia;
		this.regione = regione;
		this.descrizione = descrizione;
		this.immagine = immagine;
		this.lng=lng;
		this.lat=lat;
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
	
	public long getIdEvento() {
		return idEvento;
	}

	public void setIdEvento(long idEvento) {
		this.idEvento = idEvento;
	}

	public String getVia() {
		return via;
	}

	public void setVia(String via) {
		this.via = via;
	}

	public String getIndirizzo() {
		return indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}

	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}

	public String getCap() {
		return cap;
	}

	public void setCap(String cap) {
		this.cap = cap;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public String getRegione() {
		return regione;
	}

	public void setRegione(String regione) {
		this.regione = regione;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public String getImmagine() {
		return immagine;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
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

	public Date getInizioEvento() {
		return inizioEvento;
	}

	public void setInizioEvento(Date inizioEvento) {
		this.inizioEvento = inizioEvento;
	}

	public Date getFineEvento() {
		return fineEvento;
	}
	
	public void setFineEvento(Date fineEvento) {
		this.fineEvento = fineEvento;
	}
	
	
}
