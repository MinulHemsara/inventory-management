import axios from "axios";

const Customerurl = "http://localhost:8082/api/v1/cutomers";

class CustomerService {
  getCustomers() {
    return axios.get(Customerurl);
  }

  createCustomer(customers) {
    return axios.post(Customerurl, customers);
  }

  getCustomerById(customersID) {
    return axios.get(Customerurl + "/" + customersID);
  }

  updateCustomer(customers, customersID) {
    return axios.put(Customerurl + "/" + customersID, customers);
  }

  deleteCustomer(customersID) {
    return axios.delete(Customerurl + "/" + customersID);
  }
}

export default new CustomerService();
