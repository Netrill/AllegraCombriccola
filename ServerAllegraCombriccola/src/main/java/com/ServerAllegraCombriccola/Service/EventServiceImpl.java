package com.ServerAllegraCombriccola.Service;

import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import com.ServerAllegraCombriccola.Dao.EventDao;
import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;
import com.ServerAllegraCombriccola.Model.Indirizzo;


public class EventServiceImpl implements EventService{
	
	@Autowired
	EventDao eventDao;
	
	@Override
	public long saveEvent(GeolocalizzazioneEvento geolocalizzazioneEvento,String immagine) {
		return eventDao.saveEvent(EventBuilder.createEvent(geolocalizzazioneEvento,immagine));
		
	}

	@Override
	public boolean deletEvent(Long idEvento) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean updateEvent(String nome, String url, Date inizio, Date fine, Indirizzo indirizzo, String descrizione,
			String immagine) {
		// TODO Auto-generated method stub
		return false;
	}

}
