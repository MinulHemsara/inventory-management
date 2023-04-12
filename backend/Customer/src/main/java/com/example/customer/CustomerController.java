package com.example.customer;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping(path = "/cutomers")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @GetMapping(path = "/cutomers/{id}")
    public Customer getCustomerById(@PathVariable int id){
        return customerService.getCustomerById(id);
    }

    @PostMapping(path = "/cutomers")
    public Customer createCustomer(@RequestBody Customer customer){
        return customerService.createCustomer(customer);
    }
    @PutMapping(path = "/cutomers/{id}")
    public Customer updateCustomer(@PathVariable int id, @RequestBody Customer customer){
        return customerService.updateCustomer(id,customer);
    }
    @DeleteMapping(path = "/cutomers/{id}")
    public void deleteCustomerById(@PathVariable int id){
        customerService.deleteCustomerById(id);
    }

}
