import axios from "axios";

const producturl = "http://localhost:8080/api/v1/product";

class ProductService {
  getProducts() {
    return axios.get(producturl);
  }

  createProduct(product) {
    return axios.post(producturl, product);
  }

  getProductById(productID) {
    return axios.get(producturl + "/" + productID);
  }

  updateProduct(product, productID) {
    return axios.put(producturl + "/" + productID, product);
  }

  deleteProduct(productID) {
    return axios.delete(producturl + "/" + productID);
  }
}

export default new ProductService();
