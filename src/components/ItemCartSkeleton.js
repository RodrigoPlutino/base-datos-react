import React, { useContext } from "react";
import {  orderUpdateContext } from "./CartContext";
import { Link } from "react-router-dom";
import "../styles/styles.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;


function ItemCart(props) {
  //const order = useContext(orderContext);
  const {deleteItem}= useContext(orderUpdateContext)
  
  const currency_price_price = parseInt(props.precio).toLocaleString(
    'es-AR',
    {
      style: 'currency',
      currency: 'ARS'
    }
  )

  const currency_price = parseInt(props.total).toLocaleString(
    'es-AR',
    {
      style: 'currency',
      currency: 'ARS'
    }
  )
  

  return (
    <div id={props.id} class="card">
    <img class="card-img-top col-4" src={props.image} alt="Imagen articulo carrito"></img>
    <div class="card-body col.8">
      <Link to={props.id}><h5 class="card-title">{props.name}</h5></Link>
      <h4 class="card-text">{currency_price_price}</h4>
      <p class="card-text-small">{currency_price}</p>
      <p class="card-text-small">Cantidad: {props.cantidad}</p>
      <button onClick={()=>deleteItem(props.index)}>Eliminar del carrito</button>
    </div>
  </div>
  );
}

export default ItemCart;
