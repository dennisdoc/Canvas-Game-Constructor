package doc.service.impl;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.stereotype.Component;

import doc.model.Login;
import doc.repository.LoginRepository;
import doc.service.LoginService;

@Named
@Component
public class LoginServiceImpl implements LoginService{
	
	@Inject
	private LoginRepository repository;
	
	@Override
	public void save(Login login) {
		repository.save(login);
	}

}
