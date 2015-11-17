package doc.util;

import java.util.List;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

public class MongoProjection {
	
	public static DBObject projection(List<String>campos){
		BasicDBObject document = new BasicDBObject();
		for(int i=0;i<campos.size();i++){
			document.put(campos.get(i), 0);
		}
		return document;
	}
	
	public static DBObject projection(String campo){
		BasicDBObject document = new BasicDBObject();
		document.put(campo, 0);
		return document;
	}
	
}
