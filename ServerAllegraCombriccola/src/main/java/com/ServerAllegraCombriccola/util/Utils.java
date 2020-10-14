package com.ServerAllegraCombriccola.util;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

import org.springframework.web.multipart.MultipartFile;

import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;

public class Utils {
	public static GeolocalizzazioneEvento [] fromListToArray(List <GeolocalizzazioneEvento> list) {
		GeolocalizzazioneEvento [] geolocalizzazioneEventi = new GeolocalizzazioneEvento [list.size()];
		for (int i=0;i<list.size();i++) {
			geolocalizzazioneEventi[i]=list.get(i);	
		}
		return geolocalizzazioneEventi;
	}
	public static String getPathImmagini (MultipartFile immagine1,MultipartFile immagine2,MultipartFile immagine3) {
		String nomiImmagini = "";
		if (immagine1!=null)
			nomiImmagini = nomiImmagini + immagine1.getOriginalFilename() ;
		if (immagine2!=null)
			nomiImmagini = nomiImmagini + "; " + immagine2.getOriginalFilename();
		if (immagine3!=null)
			nomiImmagini = nomiImmagini + "; " + immagine3.getOriginalFilename();
		return nomiImmagini;
         
	}
	public static void saveImageInLocalRepository(String path) {
		// TODO Auto-generated method stub
		
	}
	public static void saveImageInLocalRepository(String path, MultipartFile immagine1,MultipartFile immagine2,MultipartFile immagine3,Properties prop) throws IOException {
		if (immagine1!=null) {
			writeFile(immagine1,path);
		}
		if (immagine2!=null) {
			writeFile(immagine2,path);
		}
		if (immagine3!=null) {
			writeFile(immagine3,path);
		}
	}
	public static void writeFile (MultipartFile f,String path) throws IOException {
		FileOutputStream fos = new FileOutputStream(path +"//"+ f.getOriginalFilename());
	    byte[] mybytes = f.getBytes();
	    fos.write(mybytes);
	}
}
