package doc.repository;

import org.springframework.stereotype.Repository;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

@Repository
public class RepositoryConnection {
	
	
	
	private String dbname = System.getenv("OPENSHIFT_APP_NAME");
	private String host = System.getenv("OPENSHIFT_MONGODB_DB_HOST");
    private String username = System.getenv("OPENSHIFT_MONGODB_DB_USERNAME");
    private String password = System.getenv("OPENSHIFT_MONGODB_DB_PASSWORD");
    private String port = System.getenv("OPENSHIFT_MONGODB_DB_PORT");
    private MongoClient mongoClient;
    
    private DB connection;
    
    private void initClient(){
    	 if (host == null) {
    		 mongoClient= new MongoClient("localhost");
             dbname="ballGame";
         }else{
//         	mongoClient=new MongoClient(new MongoClientURI("mongodb://"+username+":"+password+"@"+host+":"+port+"/?authSource="+dbname));
         	mongoClient=new MongoClient(new MongoClientURI(System.getenv("OPENSHIFT_MONGODB_DB_URL")));
         }
    	 connection=mongoClient.getDB(dbname);
    }
    
	public DB getDb() {
		if(mongoClient==null && connection==null){
			initClient();
		}
        return connection;
    }
	
	public void closeConnection(){
//		mongoClient.close();
	}
	
	public DBCollection getCollection(String collection){
		return getDb().getCollection(collection);
	}
	
}
