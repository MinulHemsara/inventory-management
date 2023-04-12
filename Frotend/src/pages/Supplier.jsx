import React, { Component } from "react";
import "./product.css";
import SupplierService from "./SupplierService";
import { Link } from "react-router-dom";

export default class Supplier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suppliers: [],
    };
  }

  componentDidMount() {
    SupplierService.getSuppliers().then((res) => {
      this.setState({ suppliers: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text" style={{ textAlign: "center" }}>
          List Suppliers
        </h2>
        {/* <div className="btndiv"> */}
        <Link to="/addsuppliers" className="btn2">
          Add Suppliers
        </Link>
        {/* </div> */}
        <table class="content-table2" style={{ textAlign: "center" }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th> ID</th>
              <th> Name</th>
              <th> Address</th>
              <th> Contact</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.suppliers.map((suppliers) => (
              <tr key={suppliers.id}>
                <td>{suppliers.id}</td>
                <td>{suppliers.name}</td>
                <td>{suppliers.address}</td>
                <td>{suppliers.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
