package com.ServerAllegraCombriccola.util;


import java.awt.Image;
import java.util.Date;

import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.EventoDTO;

import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;
public class MapperManager {
private MapperFactory mapperFactory;
public MapperManager() {
	
	this.mapperFactory = new DefaultMapperFactory.Builder().build();
	
	this.mapperFactory.classMap(Evento.class, EventoDTO.class).
		mapNulls(false).
		mapNullsInReverse(false).
		byDefault().
		field("idEvento", "idEvento").
		field("nome", "nome").
		field("url", "url").
		field("inizioEvento", "inizioEvento").
		field("fineEvento", "fineEvento").
		field("via", "via").
		field("citta", "citta").
		field("cap", "cap").
		field("provincia", "provincia").
		field("regione", "regione").
		field("lng", "lng").
		field("lat", "lat").
		field("image1", "image1").
		field("image2", "image2").
		field("image3", "image3").
		register();
	}

	public <S, D> D map(S s, Class<D> type) {
		return this.mapperFactory.getMapperFacade().map(s, type);
	}
}