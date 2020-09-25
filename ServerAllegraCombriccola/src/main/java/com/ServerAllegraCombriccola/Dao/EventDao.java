package com.ServerAllegraCombriccola.Dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.ServerAllegraCombriccola.Model.Evento;

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
			System.out.println(e.getMessage());
			return -1;
		}
	}
	
}
