package com.ServerAllegraCombriccola.Dao;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;
import com.ServerAllegraCombriccola.util.Utils;



public class EventDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	
	public long saveEvent(Evento evento) {
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
			TypedQuery<GeolocalizzazioneEvento> q =session.createQuery("select NEW com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento (idEvento,lng,lat) from Evento", GeolocalizzazioneEvento.class); 
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
			Evento e = (Evento) session.get(Evento.class,id);
			e.setLng(lng);
			e.setLat(lat);
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
			Evento e = (Evento) session.get(Evento.class,Long.parseLong(id, 10));
			return e;
		}
		catch (Exception e) {
			if (session!=null)
				session.close();
			return null;
		}
	}
	
}
