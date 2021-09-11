import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Carrito from "../Pages/Carrito";
import NavBar from "../components/NavBar";
import image from "../assets/carro.png";
import { CartContext } from "../components/CartContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Footer from "../components/Footer";

function AppRouters() {
  return (
    <CartContext>
      <Router>
      <NavBar image={image} />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Products" component={Products}></Route>
          <Route exact path="/carrito" component={Carrito}></Route>
          <Route  path="/:product_id">
            <ItemDetailContainer />
          </Route>

          <Route path="*"> Page not found, please click in Home</Route>
        </Switch>
        <Footer/>
      </Router>
      </CartContext>
    
  );
}

export default AppRouters;
