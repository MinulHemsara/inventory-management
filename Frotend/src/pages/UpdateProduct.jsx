import React, { Component } from "react";
import "./form.css";
import ProductService from "./ProductService";

export default class UpdateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      productname: "",
      productqty: "",
      productprice: "",
    };

    this.changeproductname = this.changeproductname.bind(this);
    this.changeproductqty = this.changeproductqty.bind(this);
    this.changeproductprice = this.changeproductprice.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }
  componentDidMount() {
    ProductService.getProductById(this.state.id).then((res) => {
      let product = res.data;
      this.setState({
        productname: product.name,
        productqty: product.qty,
        productprice: product.price,
      });
    });
  }

  updateProduct = (e) => {
    e.preventDefault();

    let product = {
      name: this.state.name,
      qty: this.state.qty,
      price: this.state.price,
    };
    console.log("product =>" + JSON.stringify(product));

    ProductService.updateProduct(product, this.state.id).then((res) => {
      this.props.history.push("/products");
    });

    // ProductService.createProduct(product).then((res) => {
    //   this.props.history.push("/products");
    // });
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
          <h1 className="h1">Update Products</h1>
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
            <button className="btn--1" onClick={this.updateProduct}>
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
