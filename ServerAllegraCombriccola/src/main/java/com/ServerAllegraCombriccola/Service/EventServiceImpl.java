package com.ServerAllegraCombriccola.Service;


import org.springframework.beans.factory.annotation.Autowired;
import com.ServerAllegraCombriccola.Dao.EventDao;
import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;



public class EventServiceImpl implements EventService{
	
	@Autowired
	EventDao eventDao;
	
	@Override
	public long saveEvent(GeolocalizzazioneEvento geolocalizzazioneEvento,String  immagini) {
		return eventDao.saveEvent(EventBuilder.createEvent(geolocalizzazioneEvento,immagini));
		
	}

	@Override
	public boolean deletEvent(Long idEvento) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public GeolocalizzazioneEvento[] getAllEvents() {
		return eventDao.getAllEvents();
	}

	@Override
	public boolean updateEventById(String id, String lng, String lat) {
		return eventDao.updateEventById(id,lng,lat);
	}
	@Override
	public Evento selectEventById(String id) {

		return eventDao.getEventById(id);
	}

}
