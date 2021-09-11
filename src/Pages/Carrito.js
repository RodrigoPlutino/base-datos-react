import React, { useContext} from "react";
import ItemCartContainer from '../components/ItemCartContainer'
import ItemCartAside from '../components/ItemCartAside'
import "../styles/styles.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;





function Carrito() {

return (
  <div id="products-section">
      <ItemCartContainer/>

  </div>
)
}


export default Carrito;
