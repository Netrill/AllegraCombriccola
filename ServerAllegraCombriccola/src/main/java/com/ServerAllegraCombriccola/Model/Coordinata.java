package com.ServerAllegraCombriccola.Model;

public class Coordinata {
	private double lng;
	private double lat;
	
	
	public Coordinata () {}
	
	public Coordinata(double i, double j) {
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
}	 
