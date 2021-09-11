import React,{useContext} from "react";
import { orderContext } from "./CartContext";

import "../styles/styles.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;



function ItemCartSkeletonTotal(props) {


  const order = useContext(orderContext);
  let total = 0;
  let cantidad = 0;
  for(let x of order){
    total = total + x.total;
    cantidad = cantidad + x.cantidad;
    console.log(total);
    console.log(cantidad);
  }


  
  const currency_price = total.toLocaleString(
    'es-AR',
    {
      style: 'currency',
      currency: 'ARS'
    }
  )
  

  return (
    <div id={props.id} class="card">
    <img class="card-img-top col-4" src="https://i.pinimg.com/474x/93/b5/f9/93b5f9913d2e4316cd6e541c67b9aed0.jpg" alt="Imagen carrito"></img>
    <div class="card-body col.8">
      <h5 class="card-title">TOTAL</h5>
      <h4 class="card-text">{currency_price}</h4>
      <p class="card-text-small">Cantidad de Articulos: {cantidad}</p>
    </div>
  </div>
  );
}

export default ItemCartSkeletonTotal;
