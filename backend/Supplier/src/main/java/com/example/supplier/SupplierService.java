package com.example.supplier;


import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> getAllSuppliers(){
        return supplierRepository.findAll();
    }

    public Supplier getSupplierById(int id){
        Optional<Supplier> supplierOptional = supplierRepository.findById(id);
        return supplierOptional.get();
    }

    public Supplier createSupplier(Supplier supplier){
        return supplierRepository.save(supplier);
    }

    public Supplier updateSupplier(int id,Supplier supplier){
        Supplier existingSupplier = supplierRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Supplier not found with id" + id));
        existingSupplier.setName(supplier.getName());
        existingSupplier.setAddress(supplier.getAddress());
        existingSupplier.setContact(supplier.getContact());
        return supplierRepository.save(supplier);

    }

    public void deleteSupplier(int id){
        supplierRepository.deleteById(id);
    }
}
