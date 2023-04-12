import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./product.css";
import CustomerService from "./CustomerService";

export default class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Customers: [],
    };

    this.editCustomer = this.editCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }

  deleteCustomer(id) {
    CustomerService.deleteCustomer(id).then((res) => {
      this.setState({
        Customers: this.state.Customers.filter(
          (customers) => customers.id !== id
        ),
      });
    });
  }

  editCustomer(id) {
    this.props.history.push(`/cutomers/${id}`);
  }

  componentDidMount() {
    CustomerService.getCustomers().then((res) => {
      this.setState({ Customers: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text" style={{ textAlign: "center" }}>
          List Customers
        </h2>
        {/* <div className="btndiv"> */}
        <Link to="/addproduct" className="btn">
          Add Customers
        </Link>
        {/* </div> */}

        <div className="table-wrapper">
          <table class="content-table" style={{ textAlign: "center" }}>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th> ID</th>
                <th> Name</th>
                <th> Address</th>
                <th>Contact</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.Customers.map((customers) => (
                <tr key={customers.id}>
                  <td>{customers.id}</td>
                  <td>{customers.name}</td>
                  <td>{customers.address}</td>
                  <td>{customers.contact}</td>
                  <td>
                    <div className="action">
                      <button
                        onClick={() => this.editCustomer(customers.id)}
                        className="btn3"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => this.deleteCustomer(customers.id)}
                        className="btn4"
                        style={{ marginLeft: "10px" }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
