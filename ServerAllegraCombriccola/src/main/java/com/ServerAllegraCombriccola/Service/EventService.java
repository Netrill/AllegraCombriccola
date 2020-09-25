package com.ServerAllegraCombriccola.Service;

import java.util.Date;

import com.ServerAllegraCombriccola.Model.Indirizzo;

public interface EventService {
	
	boolean deletEvent (Long idEvento);
	boolean updateEvent (String nome, String url, Date inizio, Date fine, Indirizzo indirizzo,String descrizione,String immagine);
	long saveEvent(String nome, String url, Date inizio, Date fine, String via, String citta,
			String cap, String provincia, String regione, String descrizione, String immagine,double lng,double lat);
}
