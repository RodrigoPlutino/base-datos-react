import React, { useContext} from "react";
import { orderContext } from "./CartContext";
import ItemCartList from './ItemCartList';
import ItemCartAside from './ItemCartAside';
import {Link} from 'react-router-dom'



function ItemCartContainer() {

    const order = useContext(orderContext);

    return (
        <>
        {order.length >=1 ?
            <div className="col-12 products-section-box ">
                <div className="col-12 col-md-5 item-list-aside-column">
                  <ItemCartAside/>
                </div>
                <div className="col-12 col-md-7 item-list-products-column">
                    <ItemCartList/>
                </div>
            </div>
            : 
          <div className="empty-cart">
            <h1>Tu carrito está vacío</h1>
            <h7>¿No sabés qué comprar? ¡Miles de productos te esperan!</h7>
            <li className="nav__links">
            <b><Link to="/Products">Ir a productos</Link></b>
            </li>
          </div>
        }
          </>
        )
}

export default ItemCartContainer;
