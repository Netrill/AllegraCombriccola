package com.ServerAllegraCombriccola.Model;

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
	private String inizioEvento,fineEvento;
	@Column
	private String via;
	@Column
	private String indirizzo;
	@Column
	private String civico;
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

	
	public Evento () {}
	
	



	public Evento(String nome, String url, String inizioEvento, String fineEvento, String via, String indirizzo,
			String civico, String citta, String cap, String provincia, String regione, String descrizione,
			String immagine) {
		super();
		this.nome = nome;
		this.url = url;
		this.inizioEvento = inizioEvento;
		this.fineEvento = fineEvento;
		this.via = via;
		this.indirizzo = indirizzo;
		this.civico = civico;
		this.citta = citta;
		this.cap = cap;
		this.provincia = provincia;
		this.regione = regione;
		this.descrizione = descrizione;
		this.immagine = immagine;
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

	public String getInizio() {
		return inizioEvento;
	}

	public void setInizio(String inizio) {
		this.inizioEvento = inizio;
	}

	public String getFine() {
		return fineEvento;
	}

	public void setFine(String fine) {
		this.fineEvento = fine;
	}

	public long getIdEvento() {
		return idEvento;
	}

	public void setIdEvento(long idEvento) {
		this.idEvento = idEvento;
	}

	public String getInizioEvento() {
		return inizioEvento;
	}

	public void setInizioEvento(String inizioEvento) {
		this.inizioEvento = inizioEvento;
	}

	public String getFineEvento() {
		return fineEvento;
	}

	public void setFineEvento(String fineEvento) {
		this.fineEvento = fineEvento;
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

	public String getCivico() {
		return civico;
	}

	public void setCivico(String civico) {
		this.civico = civico;
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
	
	
}
