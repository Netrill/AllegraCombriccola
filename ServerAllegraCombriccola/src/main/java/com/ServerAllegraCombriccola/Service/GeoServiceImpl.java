package com.ServerAllegraCombriccola.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.ArrayList;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
 



public class GeoServiceImpl implements GeoService {
	
	private final String httpUrl = "http://www.mapquestapi.com//geocoding/v1/address";


    private final String geoKey = "IWGa4mE01d12FHlBaGjSPVguNorZx91t";
    
    //EXAMPLE
    //http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC

	@Override
	public GeolocalizzazioneEvento getLongLatFromAddress(String via, String citta) {
	 
		try {
 
			
		    URIBuilder builder = new URIBuilder(httpUrl);
		    builder.setParameter("key", geoKey).setParameter("location", via + " " + citta + " italy");

		    HttpClient client = HttpClient.newHttpClient();
		    HttpRequest request = HttpRequest.newBuilder()
		          .uri(builder.build())
		          .build();
		     
		    HttpResponse<String> response =
		          client.send(request, BodyHandlers.ofString());
		    
		    JSONParser jsonParser = new JSONParser();
		    JSONObject object = (JSONObject) jsonParser.parse(response.body());
		    JSONArray results = (JSONArray) object.get("results"); 
		    
		    object = (JSONObject) results.get(0);
		    JSONArray locations = (JSONArray) object.get("locations"); 
		    object = (JSONObject) locations.get(0);
		    
		    ObjectMapper mapper = new ObjectMapper();
		    return mapper.readValue(object.get("displayLatLng").toString(), GeolocalizzazioneEvento.class);
		}
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
