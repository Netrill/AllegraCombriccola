package com.ServerAllegraCombriccola.Service;

import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import com.ServerAllegraCombriccola.Dao.EventDao;
import com.ServerAllegraCombriccola.Model.Indirizzo;


public class EventServiceImpl implements EventService{
	
	@Autowired
	EventDao eventDao;
	
	@Override
	public long saveEvent(String nome, String url, Date inizio, Date fine, String via,String citta,String cap,String provincia,String regione, String descrizione,
			String immagine,double lng,double lat) {
		return eventDao.saveEvent(EventBuilder.createEvent(nome,url,inizio,fine,via,citta,cap,provincia,regione,descrizione,immagine,lng,lat));
		
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
