package com.ServerAllegraCombriccola.RestController;

import java.util.Date;
import java.util.Properties;
import java.io.File;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;
import com.ServerAllegraCombriccola.Service.EventServiceImpl;
import com.ServerAllegraCombriccola.Service.GeoService;
import com.ServerAllegraCombriccola.util.Utils;



@RestController
public class EventiRestController {
	
	@Autowired
	EventServiceImpl eventService;
	
	@Autowired
	GeoService geoService;
	
	@Autowired
	Properties properties;
	
	@GetMapping("/event/get")
	@CrossOrigin(origins = "http://localhost:4200")
	 Evento geoEventByid(@RequestParam String id) {
		return eventService.selectEventById(id);
	}
	@PostMapping("/event/update")
	@CrossOrigin(origins = "http://localhost:4200")
	 boolean geoEventByid(@RequestParam String id,@RequestParam String lng,@RequestParam String lat ) {
		return eventService.updateEventById(id,lng,lat);
	}
	
	@PostMapping("/event/putEvent")
	@CrossOrigin(origins = "http://localhost:4200")
	GeolocalizzazioneEvento putEvent (@RequestParam String nome,@RequestParam (required = false) String  url,@RequestParam String inizio,@RequestParam String fine,@RequestParam String via,@RequestParam String citta,
			@RequestParam String cap,@RequestParam String provincia,@RequestParam String regione,@RequestParam String descrizione,
			@RequestParam (required = false) MultipartFile  immagine1,@RequestParam (required = false) MultipartFile immagine2,@RequestParam (required = false) MultipartFile immagine3) {
		try {
			GeolocalizzazioneEvento geolocalizzazioneEvento =  geoService.getLongLatFromAddress(via, citta,cap,provincia,regione);
			SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss dd/MM/yyyy");
			geolocalizzazioneEvento.setInizio(dateFormat.parse(inizio));
			geolocalizzazioneEvento.setFine(dateFormat.parse(fine));
			geolocalizzazioneEvento.setVia(via);
			geolocalizzazioneEvento.setCitta(citta);
			geolocalizzazioneEvento.setCap(cap);
			geolocalizzazioneEvento.setProvincia(provincia);
			geolocalizzazioneEvento.setRegione(regione);
			geolocalizzazioneEvento.setNome(nome);
			geolocalizzazioneEvento.setDescrizione(descrizione);
			String immagini = Utils.getPathImmagini(immagine1,immagine2,immagine3);
			Utils.saveImageInLocalRepository((properties.getProperty("ImageRepository")),immagine1,immagine2,immagine3,properties);
			long id= eventService.saveEvent(geolocalizzazioneEvento,immagini);
			geolocalizzazioneEvento.setId(id);  
			return geolocalizzazioneEvento;
		}catch(Exception e) {
			return null;
		}
	}
	
	@GetMapping("/event/getAll")
	@CrossOrigin(origins = "http://localhost:4200")
	GeolocalizzazioneEvento [] getAllEvents ()  {
		try {
			return eventService.getAllEvents();
			 
		}catch(Exception e) {
			return null;
		}
	}
	
}
