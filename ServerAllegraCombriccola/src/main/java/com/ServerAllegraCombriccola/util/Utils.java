package com.ServerAllegraCombriccola.util;

import java.util.List;

import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;

public class Utils {
	public static GeolocalizzazioneEvento [] fromListToArray(List <GeolocalizzazioneEvento> list) {
		GeolocalizzazioneEvento [] geolocalizzazioneEventi = new GeolocalizzazioneEvento [list.size()];
		for (int i=0;i<list.size();i++) {
			geolocalizzazioneEventi[i]=list.get(i);	
		}
		return geolocalizzazioneEventi;
	}
}
