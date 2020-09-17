package com.ServerAllegraCombriccola.RestController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ServerAllegraCombriccola.Model.Coordinata;



@RestController
public class EventiRestController {
	
	@GetMapping("/event/get")
	Coordinata getEvent (@RequestParam String id) {
		return new Coordinata(10,20);
	}
	@PostMapping("/event/set")
	void putEvent (@RequestParam String indirizzo,@RequestParam String url,@RequestParam String foto1) {
		System.out.println("PUTEVENT " + indirizzo + " "+ url + " " + foto1);
	}
	
}
