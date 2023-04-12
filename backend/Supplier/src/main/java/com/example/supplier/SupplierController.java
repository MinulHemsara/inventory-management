package com.example.supplier;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @GetMapping(path = "/suppliers")
    public List<Supplier> getAllSuppliers(){
        return supplierService.getAllSuppliers();
    }

    @GetMapping(path = "/suppliers/{id}")
    public Supplier getSupplierById(@PathVariable int id){
        return supplierService.getSupplierById(id);
    }

    @PostMapping(path = "/suppliers")
    public Supplier createSupplier(@RequestBody Supplier supplier){
        return supplierService.createSupplier(supplier);
    }

    @PutMapping(path = "/suppliers/{id}")
    public Supplier updateSupplier(@PathVariable int id,@RequestBody Supplier supplier){
        return supplierService.updateSupplier(id,supplier);
    }

    @DeleteMapping(path = "/suppliers/{id}")
    public void deleteSupplier(@PathVariable int id){
        supplierService.deleteSupplier(id);
    }
}
