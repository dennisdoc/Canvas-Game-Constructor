package doc.repository;

import org.springframework.stereotype.Repository;

import com.mongodb.BasicDBObject;

import doc.model.Login;
import doc.model.Mapa;

@Repository
public class LoginRepository extends RepositoryConnection{

	public void save(Login login){
		getCollection("login").save(getMongoObject(login));
		closeConnection();
	}
	
	public BasicDBObject getMongoObject(Login login){
		BasicDBObject document = new BasicDBObject();
		document.put("_id", login.getLogin());
		document.put("senha", login.getSenha());
		document.put("email", login.getEmail());
		return document;
	}
	
}
