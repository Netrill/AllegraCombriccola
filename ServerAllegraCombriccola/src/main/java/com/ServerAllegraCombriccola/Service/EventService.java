package com.ServerAllegraCombriccola.Service;

import java.util.Date;

import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;
import com.ServerAllegraCombriccola.Model.Indirizzo;

public interface EventService {
	
	boolean deletEvent (Long idEvento);
	boolean updateEvent (String nome, String url, Date inizio, Date fine, Indirizzo indirizzo,String descrizione,String immagine);
	long saveEvent(GeolocalizzazioneEvento geolocalizzazioneEvento, String immagine);
	GeolocalizzazioneEvento [] getAllEvents();
}
