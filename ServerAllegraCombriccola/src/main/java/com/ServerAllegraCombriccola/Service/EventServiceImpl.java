package com.ServerAllegraCombriccola.Service;

import java.sql.Date;
import org.springframework.beans.factory.annotation.Autowired;
import com.ServerAllegraCombriccola.Dao.EventDao;
import com.ServerAllegraCombriccola.Model.Indirizzo;


public class EventServiceImpl implements EventService{
	
	@Autowired
	EventDao eventDao;
	
	@Override
	public boolean saveEvent(String nome, String url, Date inizio, Date fine, Indirizzo indirizzo, String descrizione,
			String immagine) {
		eventDao.saveEvent(EventBuilder.createEvent(nome,url,inizio,fine,indirizzo,descrizione,immagine));
		return false;
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
