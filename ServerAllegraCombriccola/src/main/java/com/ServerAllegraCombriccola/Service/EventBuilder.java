package com.ServerAllegraCombriccola.Service;


import com.ServerAllegraCombriccola.Model.EventoDTO;
import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;

public class EventBuilder {
	
	public static EventoDTO createEvent (GeolocalizzazioneEvento g,String immagini) {
		return new EventoDTO  (g.getNome(),g.getUrl(),g.getInizio(),g.getFine(),g.getVia(),
				g.getCitta(),g.getCap(),g.getProvincia(),g.getRegione(),g.getDescrizione(),
				immagini, g.getLng(),g.getLat());

	}

}
