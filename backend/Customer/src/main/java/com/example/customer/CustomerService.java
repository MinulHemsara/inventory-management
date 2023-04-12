package com.example.customer;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    public Customer getCustomerById(int id){
        Optional<Customer> customerOptional = customerRepository.findById(id);
        return customerOptional.get();
    }

    public Customer createCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(int id,Customer customer){
        Customer existingCustomer = customerRepository.findById(id).orElseThrow(()-> new EntityNotFoundException("Customer id not found "+id));
        existingCustomer.setName(customer.getName());
        existingCustomer.setAddress(customer.getAddress());
        existingCustomer.setContact(customer.getContact());
        return customerRepository.save(customer);
    }

    public void deleteCustomerById(int id){
        customerRepository.deleteById(id);
    }
}
