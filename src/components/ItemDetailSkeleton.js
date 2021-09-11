import React, { useState, useContext } from "react";
import ItemCounter from "./ItemCounter";
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import { orderUpdateContext } from "./CartContext";
import { orderContext } from "./CartContext";
import "../styles/detail_styles.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;




function ItemDetailSkeleton(props) {

  
    const [hiddenButton, setHiddenButton] = useState(false);
    const [counter, setCounter] = useState(1);
    const order = useContext(orderContext);
    const {insertOrder} = useContext(orderUpdateContext);
    function addItem (){
        setHiddenButton(prevhHiddenButton => !prevhHiddenButton);
        const checkIndex = order.findIndex((element)=>element.id === props.props.id);
        if(checkIndex === -1){
          insertOrder(
                props.props.title,
                props.props.price,
                counter,
                props.props.id,
                props.props.thumbnail,
                props.props.price * counter
              )
        }else{
            order[checkIndex].cantidad = order[checkIndex].cantidad + counter 
            console.log(order);
        }
        setCounter(0)

        console.log(order)
    }

  function handelInc() {
    if (counter < props.props.available_quantity) setCounter(counter + 1);
  }

  function handelDec() {
    if (counter >= 2) {
      setCounter(counter - 1);
    }
  }

  const currency_price = parseInt(props.props.price).toLocaleString(
    'es-AR',
    {
      style: 'currency',
      currency: 'ARS'
    }
  )

  return (
    <div>
      {props !== undefined ? (
          <div className="container">
            <section class="product">
              <div class="product__photo">
                <div class="photo-container">
                  <div class="photo-main">
                    <div class="controls">
                      <i class="material-icons">Compartir</i>
                      <i class="material-icons">FAV</i>
                    </div>
                    <img src={props.props.thumbnail} alt="imagen"></img>
                  </div>
                </div>
              </div>
              <div class="product__info">
                <div class="title">
                  <h1>{props.props.title}</h1>
                  <span>ID: {props.props.id}</span>
                </div>
                <div class="price">
                   <h3>{currency_price}</h3>
                </div>
                <hr/>
                <div class="variant">
                  <h3>Cantidad</h3>
                  <ItemCounter suma={handelInc} resta={handelDec} contador={counter}/>
                </div>
                <div class="description">
                  <h3>Especificaciones</h3>
                  <ul>
                    <li>---------</li>
                    <li>---------</li>
                    <li>---------</li>
                    <li>---------</li>
                  </ul>
                </div>
                <button class="buy--btn" onClick={addItem}>Añadir al carrito</button>
              </div>
            </section>
            <section>
              <Link hidden={hiddenButton == false} to="/Products"><button class="buy--btn">Seguir Comprando</button></Link>
              <Link hidden={hiddenButton == false} to="/carrito"><button class="buy--btn">Finalizar compra</button></Link>
            </section>
          </div>
            
      ) : (
        <h2> No hay nada que mostrar </h2>
      )}
    </div>
  );
}

export default ItemDetailSkeleton;
