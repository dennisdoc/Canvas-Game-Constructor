package doc.service.impl;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.stereotype.Component;

import com.mongodb.DBCursor;
import com.mongodb.DBObject;

import doc.model.Mapa;
import doc.repository.MapRepository;
import doc.service.MapService;

@Named
@Component
public class MapServiceImpl implements MapService{
	private static final long serialVersionUID = -2055697191271777408L;
	
	@Inject
	private MapRepository repository;
	
	@Override
	public void save(Mapa mapa) {
		repository.save(mapa);
	}
	
	@Override
	public String findAll(){
		return repository.findAll();
	}
	
	@Override
	public DBObject find(String titulo) {
		return repository.find(titulo);
	}

}
