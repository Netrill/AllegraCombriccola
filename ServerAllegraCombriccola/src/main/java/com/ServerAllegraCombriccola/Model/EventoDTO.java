package com.ServerAllegraCombriccola.Model;

import java.io.File;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "EVENTO")
public class EventoDTO implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
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
	private String immaginiEvento ;
	@Column
	private String lng;
	@Column
	private String lat;

	private File image1;
	private File image2;
	private File image3;
	
	public EventoDTO () {}
	
	



	public EventoDTO(String nome, String url, Date inizioEvento, Date fineEvento, String via, 
			String citta,String cap, String provincia, String regione, String descrizione,
			String immagini, String lng,String lat) {
		super();
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
		this.immaginiEvento = immagini;
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

	public String getLng() {
		return lng;
	}

	public void setLng(String lng) {
		this.lng = lng;
	}

	public String getLat() {
		return lat;
	}

	public void setLat(String lat) {
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
	public String getImmaginiEvento() {
		return immaginiEvento;
	}

	public void setImmaginiEvento(String immaginiEvento) {
		this.immaginiEvento = immaginiEvento;
	}
	public File getImage1() {
		return image1;
	}
	public void setImage1(File image1) {
		this.image1 = image1;
	}
	public File getImage2() {
		return image2;
	}
	public void setImage2(File image2) {
		this.image2 = image2;
	}
	public File getImage3() {
		return image3;
	}
	public void setImage3(File image3) {
		this.image3 = image3;
	}
	
	
	
}
