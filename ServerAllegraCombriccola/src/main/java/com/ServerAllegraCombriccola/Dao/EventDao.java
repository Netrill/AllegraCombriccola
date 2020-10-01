package com.ServerAllegraCombriccola.Dao;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;



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
			e.printStackTrace();
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
			return new GeolocalizzazioneEvento[0];
		}
		catch (Exception e) {
			if (session!=null)
				session.close();
			e.printStackTrace();
			return new GeolocalizzazioneEvento[0];
		}
	}
	
}
