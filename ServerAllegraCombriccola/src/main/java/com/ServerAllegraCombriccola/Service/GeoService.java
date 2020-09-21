package com.ServerAllegraCombriccola.Service;

import com.ServerAllegraCombriccola.Model.Coordinata;

public interface GeoService {
	
	Coordinata getLongLatFromAddress(String via,String citta,String cap,String provincia,String regione);

}
