package doc.model;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.Id;

import com.mongodb.BasicDBObject;

public class Mapa implements Serializable{
	
	@Id
	private String titulo;
	
	private String conteudo;

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}
	
}
