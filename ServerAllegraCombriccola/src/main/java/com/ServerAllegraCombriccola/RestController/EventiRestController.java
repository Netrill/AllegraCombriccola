package com.ServerAllegraCombriccola.RestController;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ServerAllegraCombriccola.Model.Coordinata;
import com.ServerAllegraCombriccola.Model.Indirizzo;
import com.ServerAllegraCombriccola.Service.EventServiceImpl;



@RestController
public class EventiRestController {
	
	@Autowired
	EventServiceImpl eventService;
	
	@GetMapping("/event/get")
	Coordinata getEvent (@RequestParam String id) {
		return new Coordinata(10,20);
	}
	
	@PostMapping("/event/put")
	void putEvent (@RequestParam String nome,@RequestParam String url,@RequestParam String inizio,@RequestParam String fine,@RequestParam String via,@RequestParam String civico,@RequestParam String citta,@RequestParam String cap,@RequestParam String provincia,@RequestParam String regione,@RequestParam String descrizione,@RequestParam String immagine) {

		eventService.saveEvent(nome, url, inizio, fine,via,civico,citta,cap,provincia,regione, descrizione, immagine);
	}
	
}
