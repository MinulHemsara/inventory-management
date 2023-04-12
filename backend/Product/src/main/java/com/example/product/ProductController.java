package com.example.product;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/product")
    public List<Product> getAllProduct(){
        return productService.getAllProducts();
    }

    @GetMapping(path = "/product/{id}")
    public Product getProductById(@PathVariable int id){
        return productService.getProductById(id);
    }

    @PostMapping(path = "/product")
    public Product createProduct(@RequestBody Product product){
        return productService.createProduct(product);
    }

    @PutMapping(path = "/product/{id}")
    public Product updateProduct(@PathVariable int id,@RequestBody Product product){
        return productService.updateProductById(id,product);
    }




    @DeleteMapping(path = "product/{id}")
    public void deleteProduct(@PathVariable int id){
        productService.deleteProduct(id);
    }
}
