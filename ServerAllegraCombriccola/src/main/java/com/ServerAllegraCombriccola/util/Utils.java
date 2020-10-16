package com.ServerAllegraCombriccola.util;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.swing.ImageIcon;

import org.springframework.web.multipart.MultipartFile;

import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Model.EventoDTO;
import com.ServerAllegraCombriccola.Model.GeolocalizzazioneEvento;
import com.ServerAllegraCombriccola.Model.ImageModel;

public class Utils {
	public static GeolocalizzazioneEvento [] fromListToArray(List <GeolocalizzazioneEvento> list) {
		GeolocalizzazioneEvento [] geolocalizzazioneEventi = new GeolocalizzazioneEvento [list.size()];
		for (int i=0;i<list.size();i++) {
			geolocalizzazioneEventi[i]=list.get(i);	
		}
		return geolocalizzazioneEventi;
	}
	public static String getSequenzaImmagini (MultipartFile immagine1,MultipartFile immagine2,MultipartFile immagine3) {
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
	public static ArrayList<ImageModel>  loadImageFromRepository(EventoDTO e,String path) throws IOException {
		String nomiImmagini = e.getImmaginiEvento();
		ArrayList<ImageModel> images = new ArrayList <>();
		if (nomiImmagini!=null && nomiImmagini!="") {
			String immagine [] = nomiImmagini.split(";");
			int i = 0;
			for (String img : immagine) {
				FileInputStream in=new FileInputStream((path+"//"+img.trim()));  
				byte[] byteArray=in.readAllBytes();
				ImageModel imageModel = new ImageModel();
				imageModel.setBuffer(byteArray);
				imageModel.setNome(img.trim());
				images.add(imageModel);
				in.close();
			}
		}
		return images;
		
	}
	public static Evento mapResponseEvent(EventoDTO e, ArrayList<ImageModel> imageList) {
		MapperManager mapperManager = new MapperManager();
		Evento evento = mapperManager.map(e, Evento.class);	
		int i=0;
		for (ImageModel img : imageList) {
			if(i==0) {
				evento.setImage1(img.getBuffer());
			}
			if(i==1) {
				evento.setImage2(img.getBuffer());
			}
			if(i==2) {
				evento.setImage3(img.getBuffer());
			}
			i++;
		}
		return evento;
		
	}
}
