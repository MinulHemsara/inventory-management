import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Supplier from "./pages/Supplier";
import Product from "./pages/Product";
import Addproduct from "./pages/Addproduct";
import UpdateProduct from "./pages/UpdateProduct";
import Addsupplier from "./pages/Addsupplier";
import Customer from "./pages/Customer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/products" component={Product}>
        {/* <Product /> */}
      </Route>
      <Route exact path="/addproduct" component={Addproduct}></Route>
      <Route exact path="/updateproduct/:id" component={UpdateProduct}></Route>
      <Route exact path="/addsuppliers" component={Addsupplier}></Route>
      <Route exact path="/suppliers">
        <Supplier />
      </Route>
      <Route exact path="/customers" component={Customer}></Route>
      <Route exact path="/diagrams">
        <h1>Diagrams Page</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
