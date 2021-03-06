import React from "react";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;


function  ItemListSkeleton(props) {

  const currency_price = parseInt(props.precio).toLocaleString(
    'es-AR',
    {
      style: 'currency',
      currency: 'ARS'
    }
  )


  return (
    <div class="card">
      <img class="card-img-top col-4" src={props.image} alt="Card image cap"></img>
      <div class="card-body col.8">
        <Link to={props.id}><h5 class="card-title">{props.name}</h5></Link>
        <h4 class="card-text">{currency_price}</h4>
        <p class="card-text-small">Envio Gratis</p>
      </div>
    </div>
  );
}

export default ItemListSkeleton;
