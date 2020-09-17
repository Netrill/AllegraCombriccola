package com.ServerAllegraCombriccola.Model;

public class Indirizzo {
	
	private String via;
	private String numero;
	private String città;
	private String cap;
	private String provincia;
	private String regione;
	public Indirizzo(String via, String numero, String città, String cap, String provincia, String regione) {
		super();
		this.via = via;
		this.numero = numero;
		this.città = città;
		this.cap = cap;
		this.provincia = provincia;
		this.regione = regione;
	}
	public String getVia() {
		return via;
	}
	public void setVia(String via) {
		this.via = via;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getCittà() {
		return città;
	}
	public void setCittà(String città) {
		this.città = città;
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
	
	
}
