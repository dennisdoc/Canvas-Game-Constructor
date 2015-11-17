package doc.service;

import java.io.Serializable;

import doc.model.Login;

public interface LoginService extends Serializable{

	public void save(Login login);

}
