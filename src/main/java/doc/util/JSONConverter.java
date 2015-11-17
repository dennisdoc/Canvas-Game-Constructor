package doc.util;

import java.io.IOException;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;
import com.mongodb.util.JSON;

import doc.model.Login;

public class JSONConverter {
	
	public static String convertMap(String map){
		map=map.substring(map.indexOf("conteudo")+16,map.length()-5);
//		map=map.replaceAll("\\\\\"", "");
		map=map.replaceAll("\\\\", "");
		map=map.replaceAll("/aspas/", "\"");
		return map;
	}
	
	public static Object convertObject(String conteudo,Object obj){
		return new Object();
	}
	
}
