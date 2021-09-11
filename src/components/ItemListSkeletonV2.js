import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'

function  ItemListSkeletonV2(props) {

  const currency_price = parseInt(props.precio).toLocaleString(
    'es-AR',
    {
      style: 'currency',
      currency: 'ARS'
    }
  )


  return (
    <>
    <Card className="list-product-item">
      <Link to={props.id} className="list-product-item-body">
        <div className="list-product-item-body-iframe-content">
          <Card.Img src={props.image} variant="top" className="list-product-item-body-iframe"/>
        </div>
        <Card.Body className="list-product-item-body-body">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
    </>
    // <div class="card">
    //   <img class="card-img-top col-4" src={props.image} alt="Card image cap"></img>
    //   <div class="card-body col.8">
    //     <Link to={props.id}><h5 class="card-title">{props.name}</h5></Link>
    //     <h4 class="card-text">{currency_price}</h4>
    //     <p class="card-text-small">Envio Gratis</p>
    //   </div>
    // </div>
  );
}

export default ItemListSkeletonV2;
