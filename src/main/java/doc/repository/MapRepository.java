package doc.repository;

import javax.inject.Inject;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
import com.mongodb.util.JSON;

import doc.model.Mapa;
import doc.util.MongoProjection;

@Repository
public class MapRepository extends RepositoryConnection{
	
	public void save(Mapa mapa){
		getCollection("mapa").save(getMongoObject(mapa));
		closeConnection();
	}
	
	public DBObject find(String titulo){
		DBObject map= getCollection("mapa").findOne(titulo);
		closeConnection();
		return map;
	}
	
	public String findAll(){
		String json =JSON.serialize(getCollection("mapa").find(null, MongoProjection.projection("conteudo")));
		closeConnection();
		return json;
	}
	
	public BasicDBObject getMongoObject(Mapa mapa){
		BasicDBObject document = new BasicDBObject();
		document.put("_id", mapa.getTitulo());
		document.put("conteudo", mapa.getConteudo());
		return document;
	}
	
}
