package com.ServerAllegraCombriccola.Service;

import java.sql.Date;

import com.ServerAllegraCombriccola.Model.Indirizzo;

public interface EventService {
	
	boolean saveEvent (String nome, String url, Date inizio, Date fine, Indirizzo indirizzo,String descrizione,String immagine);
	boolean deletEvent (Long idEvento);
	boolean updateEvent (String nome, String url, Date inizio, Date fine, Indirizzo indirizzo,String descrizione,String immagine);
}
