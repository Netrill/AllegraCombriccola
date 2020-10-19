package com.ServerAllegraCombriccola.Dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.EventoDTO;
import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;
import com.ServerAllegraCombriccola.Model.ImageModel;
import com.ServerAllegraCombriccola.util.Utils;




public class EventDaoAccess {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Autowired
	Properties properties;
	
	
	public long saveEvent(EventoDTO evento) {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			session.saveOrUpdate(evento);
			session.getTransaction().commit();
			session.close();
			return evento.getIdEvento();
		}
		catch (Exception e) {
			if (session!=null)
				session.close();
			return -1;
		}
	}


	public GeolocalizzazioneEvento[] getAllEvents() {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			TypedQuery<GeolocalizzazioneEvento> q =session.createQuery("select NEW com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento (idEvento,lng,lat) from EventoDTO where SALVATO=1 ", GeolocalizzazioneEvento.class); 
			List<GeolocalizzazioneEvento> list=q.getResultList();
			session.close();
			return Utils.fromListToArray(list);
		}
		catch (Exception e) {
			if (session!=null)
				session.close();
			return new GeolocalizzazioneEvento[0];
		}
	}


	public boolean updateEventById(String id, String lng, String lat) {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			EventoDTO e = (EventoDTO) session.get(EventoDTO.class,Long.parseLong(id, 10));
			e.setLng(lng);
			e.setLat(lat);
			e.setSalvato(true);
			session.getTransaction().commit();
			session.close();
			return true;
		}
		catch (Exception e) {
			if (session!=null)
				session.close();
			return false;
		}
	}
	
	public Evento getEventById(String id) {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			EventoDTO e = (EventoDTO) session.get(EventoDTO.class,Long.parseLong(id, 10));
			ArrayList<ImageModel> imageList =Utils.loadImageFromRepository(e,properties.getProperty("ImageRepository"));
			Utils.mapResponseEvent(e, imageList);
			session.close();
			return  Utils.mapResponseEvent(e, imageList);
		}
		catch (Exception e) {
			if (session!=null)
				session.close();
			return null;
		}
	}
	
}
