package doc.controller;

import java.io.Serializable;
import java.util.List;

import doc.model.Mapa;

public interface MapController extends Serializable{

	public void save(String titulo,String mapaConteudo);
	
}
