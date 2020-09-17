package com.ServerAllegraCombriccola.Service;

import java.sql.Date;

import com.ServerAllegraCombriccola.Model.Indirizzo;

public interface EventService {
	
	boolean deletEvent (Long idEvento);
	boolean updateEvent (String nome, String url, Date inizio, Date fine, Indirizzo indirizzo,String descrizione,String immagine);
	boolean saveEvent(String nome, String url, String inizio, String fine, String via, String civico, String citta,
			String cap, String provincia, String regione, String descrizione, String immagine);
}
