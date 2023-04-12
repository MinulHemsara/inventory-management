import React, { Component } from "react";
import "./product.css";
import ProductService from "./ProductService";
import { Link } from "react-router-dom";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Products: [],
    };

    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    ProductService.deleteProduct(id).then((res) => {
      this.setState({
        Products: this.state.Products.filter((product) => product.id !== id),
      });
    });
  }

  editProduct(id) {
    this.props.history.push(`/updateproduct/${id}`);
  }

  componentDidMount() {
    ProductService.getProducts().then((res) => {
      this.setState({ Products: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text" style={{ textAlign: "center" }}>
          List Products
        </h2>
        {/* <div className="btndiv"> */}
        <Link to="/addproduct" className="btn">
          Add Products
        </Link>
        {/* </div> */}

        <div className="table-wrapper">
          <table class="content-table" style={{ textAlign: "center" }}>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th> ID</th>
                <th> Name</th>
                <th> Quantity</th>
                <th> Price</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.Products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.qty}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="action">
                      <button
                        onClick={() => this.editProduct(product.id)}
                        className="btn3"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => this.deleteProduct(product.id)}
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
