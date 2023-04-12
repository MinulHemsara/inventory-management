import axios from "axios";

const supplierurl = "http://localhost:8081/api/v1/suppliers";

class SupplierService {
  getSuppliers() {
    return axios.get(supplierurl);
  }
}
export default new SupplierService();
