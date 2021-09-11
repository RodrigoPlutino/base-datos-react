import React, { useState, useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import { orderContext } from "./CartContext";
import {getFirestore} from '../Firebase/Firebase'

function ItemCartAside() {

    const [buyer, setBuyer] = useState({});
    const [pedidos, setPedidos] = useState();

    const [hiddenButton, setHiddenButton] = useState(false);

  
    function sendBuy(pedidos) {
      const db = getFirestore();
      const orders = db.collection("shop-products");

      orders
        .add(pedidos)
        .then(({ id }) => {
          console.log("se registro");
          setHiddenButton(prevhHiddenButton => !prevhHiddenButton);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(console.log("proceso finalizado"));

        let Arr1 = order;
          Arr1.splice(0,Arr1.length);
           
        setTimeout(function(){ window.location = "/"; }, 9000);
    }
  
    function getBuyer(event) {
      let temp = { ...buyer };
      if (event.target.attributes.placeholder.nodeValue === "Ingresa tu nombre") {
        let nombre = event.target.value;
        temp.name = nombre;
      } else if (event.target.attributes.placeholder.nodeValue === "Ingresa tu apellido") {
        let apellido = event.target.value;
        temp.surname = apellido;
      } else {
        let telefono = event.target.value;
        temp.phone = telefono;
      }
      setBuyer(temp);
    }
  
    useEffect(() => {
      setPedidos({ buyer: buyer, orders: order });
    }, [buyer, order]);

    console.log(pedidos);



    return (
        <>
            <h2>Carrito  checkout</h2>

            <div hidden={hiddenButton == false} class="alert alert-success" role="alert">
              <b>Su compra se ha realizado correctamente!</b> Sera redirigid@ en 5, 4, 3 ..
            </div>

            <form>
            
            <div className="form-outline mb-4">
              <input placeholder="Ingresa tu nombre" onChange={getBuyer} requiered type="text" id="form5Example1" className="form-control" />
              <label className="form-label" for="form5Example1"></label>
            </div>

            
            <div className="form-outline mb-4">
              <input placeholder="Ingresa tu apellido" onChange={getBuyer} requiered type="text" id="form5Example1" className="form-control" />
              <label className="form-label" for="form5Example1"></label>
            </div>

            <div className="form-outline mb-4">
              <input placeholder="Ingresa tu telefono/celular" onChange={getBuyer} requiered type="text" id="form5Example1" className="form-control" />
              <label className="form-label" for="form5Example1"></label>
            </div>
          </form>
          
          {!buyer.name || !buyer.surname || !buyer.phone ? (
            <button type="submit" class="btn btn-secondary btn-block mb-4 disabled">Comprar</button>
          ) : (
            <button type="submit" class="btn btn-primary btn-block mb-4" onClick={()=>sendBuy(pedidos)}>Comprar</button>
          )}
    </>
  );
}

export default ItemCartAside
