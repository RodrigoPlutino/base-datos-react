import React, { useContext} from "react";
import { orderContext } from "./CartContext";
import ItemCartSkeleton from "./ItemCartSkeleton";
import {Link} from 'react-router-dom'
import ItemCartSkeletonTotal from "./ItemCartSkeletonTotal";


function ItemCartList() {
  
        const order = useContext(orderContext);

      
      return (<>
      {order.map((item,i) => {
              return (
                <ItemCartSkeleton
                  key={i}
                  index= {i}
                  image={item.image}
                  id={item.id}
                  nombre={item.nombre}
                  precio={item.precio}
                  cantidad={item.cantidad}
                  total= {item.precio * item.cantidad}
                />

              );
            })}
            <ItemCartSkeletonTotal/>
          </>

        );
      }
      
      
      export default ItemCartList;
