package doc.controller;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.mongodb.DBObject;
import com.mongodb.util.JSON;

import doc.model.Mapa;
import doc.model.UserDetails;
import doc.service.MapService;
import doc.util.JSONConverter;

@Controller
@RequestMapping(value="/api/map/")
public class MapControllerImpl implements MapController{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3461597979833195994L;
	
	@Inject
	private MapService service;
	
	@Override
	@RequestMapping(value="/atributos", method = RequestMethod.POST,consumes={"application/xml", "application/json"})
	@ResponseStatus(value = HttpStatus.OK)
	public void save(@RequestParam("titulo") String titulo,@RequestBody String mapaConteudo){
		Mapa mapa = new Mapa();
		mapa.setTitulo(titulo);
		mapa.setConteudo(mapaConteudo.replaceAll("\\\\", ""));
		service.save(mapa);
	}
	
	@RequestMapping(value="/consulta/all",method = RequestMethod.GET)
	public @ResponseBody String findAll() {
		return service.findAll();
	}
	
	@RequestMapping(value="/consulta",method = RequestMethod.GET)
	public @ResponseBody String consulta(@RequestParam("titulo") String titulo) {
		return JSONConverter.convertMap(service.find(titulo).toString());
	}
	
}
