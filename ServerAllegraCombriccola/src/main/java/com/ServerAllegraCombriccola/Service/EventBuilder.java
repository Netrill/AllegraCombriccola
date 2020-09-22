package com.ServerAllegraCombriccola.Service;


import java.util.Date;

import com.ServerAllegraCombriccola.Model.Evento;

public class EventBuilder {
	
	public static Evento createEvent (String nome, String url, Date inizio,  Date fine, String via,String citta,String cap,String provincia,String regione, String descrizione, String immagine, double lng,double lat) {
		return new Evento  (nome,url,inizio,fine,via,citta,cap,provincia,regione,descrizione,immagine, immagine,lng,lat);
	}

}
