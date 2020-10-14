package com.ServerAllegraCombriccola.Service;

import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;

public interface EventService {
	
	boolean deletEvent (Long idEvento);
	boolean updateEventById (String id,String lng,String lat);
	long saveEvent(GeolocalizzazioneEvento geolocalizzazioneEvento, String  immagini);
	GeolocalizzazioneEvento [] getAllEvents();
	Evento selectEventById(String id);
}
