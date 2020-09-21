package com.ServerAllegraCombriccola.Service;

import java.net.HttpURLConnection;
import java.net.URL;

import com.ServerAllegraCombriccola.Model.Coordinata;



public class GeoServiceImpl implements GeoService {
	
	private final String httpUrl = "http://www.mapquestapi.com//geocoding//v1//address";


    private final String geoKey = "IWGa4mE01d12FHlBaGjSPVguNorZx91t";
    
    //EXAMPLE
    //http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC

	@Override
	public Coordinata getLongLatFromAddress(String via, String citta, String cap, String provincia, String regione) {
		URL url;
		try {
			url = new URL("http://example.com");
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			con.setRequestProperty("accept", "application/json");
			con.addRequestProperty("key", geoKey);
			con.addRequestProperty("location", via + " " +cap + " italy");
			con.connect();
			System.out.println(con.Res);

		}
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
