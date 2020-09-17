package com.ServerAllegraCombriccola.Dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.ServerAllegraCombriccola.Model.Evento;

public class EventDao {

	public void saveEvent(Evento createEvent) {
		// TODO Auto-generated method stub
		
	}/*
	
	@Autowired
	private SessionFactory sessionFactory;
	public boolean saveEvent(Evento evento) {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			session.save(evento);
			session.beginTransaction();
			session.close();
		}
		catch (Exception e) {
			if (session!=null)
				session.close();
			return false;
		}
		return true;
	}
	*/
}
