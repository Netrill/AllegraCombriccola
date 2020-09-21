package com.ServerAllegraCombriccola.RestController;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ServerAllegraCombriccola.Model.Coordinata;
import com.ServerAllegraCombriccola.Service.EventServiceImpl;
import com.ServerAllegraCombriccola.Service.GeoService;



@RestController
public class EventiRestController {
	
	@Autowired
	EventServiceImpl eventService;
	
	@Autowired
	GeoService geoService;
	
	@GetMapping("/event/get")
	Coordinata getEvent (@RequestParam String id) {
		return new Coordinata(10,20);
	}
	
	@PostMapping("/event/put")
	boolean putEvent (@RequestParam String nome,@RequestParam (required = false) String  url,@RequestParam Date inizio,@RequestParam Date fine,@RequestParam String via,@RequestParam String citta,@RequestParam String cap,@RequestParam String provincia,@RequestParam String regione,@RequestParam String descrizione,@RequestParam (required=false) String immagine) {
		System.out.println("WORKKKK");
		//eventService.saveEvent(nome, url, inizio, fine,via,civico,citta,cap,provincia,regione, descrizione, immagine);
		geoService.getLongLatFromAddress(via, citta, cap, provincia, regione);
		return true;
	}
	
}
