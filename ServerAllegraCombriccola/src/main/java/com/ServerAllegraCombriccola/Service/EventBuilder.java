package com.ServerAllegraCombriccola.Service;

import java.sql.Date;

import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.Indirizzo;

public class EventBuilder {
	
	public static Evento createEvent (String nome, String url, Date inizio, Date fine, Indirizzo indirizzo, String descrizione, String immagine) {
		return new Evento (nome,url,inizio,fine,indirizzo,descrizione,immagine);
	}

}
