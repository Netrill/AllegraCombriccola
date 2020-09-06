package com.ServerAllegraCombriccola.Model;

public class Coordinata {
	private double latitude;
	private double longitude;
	
	public Coordinata(double i, double j) {
		this.latitude=i;
		this.longitude=j;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	
	
}
