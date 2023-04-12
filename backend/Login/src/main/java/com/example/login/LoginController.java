package com.example.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/v1/")
public class LoginController {

    @Autowired
    private LoginService loginService;



    @PostMapping(path = "/login")
    public String saveLogin(@RequestBody registerDTO registerDTO){
        String id = loginService.addLogin(registerDTO);
        return id;

    }
}
