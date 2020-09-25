package com.ServerAllegraCombriccola.RestController;

import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;
import com.ServerAllegraCombriccola.Service.EventServiceImpl;
import com.ServerAllegraCombriccola.Service.GeoService;



@RestController
public class EventiRestController {
	
	@Autowired
	EventServiceImpl eventService;
	
	@Autowired
	GeoService geoService;
	
	@GetMapping("/event/get")
	GeolocalizzazioneEvento getEvent (@RequestParam String id) {
		return new GeolocalizzazioneEvento(10,20);
	}
	
	@PostMapping("/event/put")
	@CrossOrigin(origins = "http://localhost:4200")
	GeolocalizzazioneEvento putEvent (@RequestParam String nome,@RequestParam (required = false) String  url,@RequestParam String inizio,@RequestParam String fine,@RequestParam String via,@RequestParam String citta,@RequestParam String cap,@RequestParam String provincia,@RequestParam String regione,@RequestParam String descrizione,@RequestParam (required=false) String immagine) throws ParseException {
		
		GeolocalizzazioneEvento geolocalizzazioneEvento =  geoService.getLongLatFromAddress(via, citta, cap, provincia, regione);
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss dd/MM/yyyy");

		
		Date dateInizio = dateFormat.parse(inizio);
		Date dateFine = dateFormat.parse(fine);

		
		long id= eventService.saveEvent(nome, url, dateInizio, dateFine, via, citta, cap, provincia, regione, descrizione, immagine,geolocalizzazioneEvento.getLng(),geolocalizzazioneEvento.getLat());
		geolocalizzazioneEvento.setId(id);  
		return geolocalizzazioneEvento;
	}
	
}
