package doc.service;

import java.io.Serializable;

import javax.inject.Named;

import com.mongodb.DBCursor;
import com.mongodb.DBObject;

import doc.model.Mapa;

public interface MapService extends Serializable{
	
	public void save(Mapa mapa);
	
	public DBObject find(String titulo);
	
	public String findAll();
	
}
