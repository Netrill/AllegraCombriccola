package com.ServerAllegraCombriccola.Service;

import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;

public interface GeoService {
	
	GeolocalizzazioneEvento getLongLatFromAddress(String via,String citta);

}
