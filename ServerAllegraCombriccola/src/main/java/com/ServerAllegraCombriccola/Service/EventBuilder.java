package com.ServerAllegraCombriccola.Service;

import java.sql.Date;

import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.Indirizzo;

public class EventBuilder {
	
	public static Evento createEvent (String nome, String url, String inizio, String fine, String via,String civico,String citta,String cap,String provincia,String regione, String descrizione, String immagine) {
		return new Evento  (nome,url,inizio,fine,via,civico,citta,cap,provincia,regione,descrizione,immagine, immagine);
	}

}
