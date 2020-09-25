package com.ServerAllegraCombriccola.Model;

public class GeolocalizzazioneEvento {
	private long id;
	private double lng;
	private double lat;
	
	
	public GeolocalizzazioneEvento () {}
	
	public GeolocalizzazioneEvento(double i, double j) {
		this.lng=i;
		this.lat=j;
	}

	public double getLng() {
		return lng;
	}

	public void setLng(double lng) {
		this.lng = lng;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
}	 
