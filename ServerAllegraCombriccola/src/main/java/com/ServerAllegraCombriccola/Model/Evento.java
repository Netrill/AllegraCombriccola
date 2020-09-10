package com.ServerAllegraCombriccola.Model;

import java.sql.Date;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table
public class Evento {
	
	private UUID id;
	private String nome;
	private String url;
	private Date inizio,fine;
	private Indirizzo indirizzo;
	
	public Evento(String nome, String url, Date inizio, Date fine, Indirizzo indirizzo) {
		super();
		id = UUID.randomUUID();
		this.nome = nome;
		this.url = url;
		this.inizio = inizio;
		this.fine = fine;
		this.indirizzo = indirizzo;
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

	public Indirizzo getIndirizzo() {
		return indirizzo;
	}

	public void setIndirizzo(Indirizzo indirizzo) {
		this.indirizzo = indirizzo;
	}
	
}
