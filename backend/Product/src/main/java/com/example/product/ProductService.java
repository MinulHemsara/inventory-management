package com.example.product;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Product getProductById(int id){
        Optional<Product> productOptional = productRepository.findById(id);
        return productOptional.get();
    }

    public Product createProduct(Product product){
        return productRepository.save(product);
    }

//    public Product updateProduct(Product product){
//        return productRepository.save(product);
//    }


    public Product updateProductById(int id, Product product){
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id " + id));
        existingProduct.setName(product.getName());
        existingProduct.setQty(product.getQty());
        existingProduct.setPrice(product.getPrice());
        // update other properties as needed
        return productRepository.save(existingProduct);
    }


    public void deleteProduct(int id){
        productRepository.deleteById(id);
    }

}
