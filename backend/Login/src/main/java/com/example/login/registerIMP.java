package com.example.login;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class registerIMP implements LoginService {

@Autowired
private LoginRepository loginRepository;

private PasswordEncoder passwordEncoder;

    @Override
    public String addLogin(registerDTO registerDTO) {

        Login login = new Login(

                registerDTO.getId(),
                registerDTO.getUsername(),
                this.passwordEncoder.encode(registerDTO.getPassword())
        );

        loginRepository.save(login);
        return login.getUsername();
    }


}
