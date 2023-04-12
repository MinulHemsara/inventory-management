package com.example.login;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class registerDTO {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String username;

    private String password;

    public registerDTO(int id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }


    public registerDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "registerDTO{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
