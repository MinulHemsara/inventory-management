import "./form.css";
import ProductService from "./ProductService";

import React, { Component } from "react";

export default class Addproduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productname: "",
      productqty: "",
      productprice: "",
    };

    this.changeproductname = this.changeproductname.bind(this);
    this.changeproductqty = this.changeproductqty.bind(this);
    this.changeproductprice = this.changeproductprice.bind(this);
    this.addproduct = this.addproduct.bind(this);
  }
  // componentDidMount() {
  //   ProductService.getProducts().then((res) => {
  //     this.setState({ Products: res.data });
  //   });
  // }

  addproduct = (e) => {
    e.preventDefault();

    let product = {
      name: this.state.name,
      qty: this.state.qty,
      price: this.state.price,
    };
    console.log("product =>" + JSON.stringify(product));

    ProductService.createProduct(product).then((res) => {
      this.props.history.push("/products");
    });
  };

  changeproductname(event) {
    this.setState({ name: event.target.value });
  }

  changeproductqty(event) {
    this.setState({ qty: event.target.value });
  }

  changeproductprice(event) {
    this.setState({ price: event.target.value });
  }

  cancel() {
    this.props.history.push("/products");
  }
  render() {
    return (
      <div style={{}}>
        <form class="container" id="form" action="/">
          <h1 className="h1">Add Products</h1>
          <div className="se">
            <div class="input-control">
              <label>Product Name</label>
              <input
                name="name"
                type={"text"}
                value={this.state.name}
                onChange={this.changeproductname}
                required
              />
              <div class="error"></div>
            </div>
            <div class="input-control">
              <label>Product Quantity</label>
              <input
                name="qty"
                type="number"
                value={this.state.qty}
                onChange={this.changeproductqty}
                required
              />
              <div class="error"></div>
            </div>
            <div class="input-control">
              <label>Product Price</label>
              <input
                name="price"
                type="number"
                required
                value={this.state.price}
                onChange={this.changeproductprice}
              />
              <div class="error"></div>
            </div>
            <button className="btn--1" onClick={this.addproduct}>
              Add
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className="btn--2"
              onClick={this.cancel.bind(this)}
              type="cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
