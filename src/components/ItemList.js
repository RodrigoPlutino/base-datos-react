import React, { useState, useEffect } from "react";
import ItemListSkeleton from "./ItemListSkeleton";
import "../styles/styles.css";
import {getFirestore} from '../Firebase/Firebase'
import db from '../Firebase/Firebase'


function ItemList() {

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);


  //API MELI 

  //useEffect(() => {
  //  fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648")
  //    .then((res) => res.json())
  //    .then((res) => {
  //      setProducts(res.results);
  //    });
  //}, []);
  

  
  useEffect(() => {
    setLoad(true);
    const db = getFirestore();
    const itemCollection = db.collection("shop-products");
    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          console.log("No results");
        }
        setProducts(querySnapShot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);


  return (
    <div className="col-12 col-md-8 item-list-products-column">
      {
        products.map((products, index)=>{return(
          <ItemListSkeleton 
          key={index} 
          id={products.id}
          image={products.thumbnail} 
          name={products.title} 
          precio={products.price} 
          description={products.description} 
          stock={products.available_quantity}/>
        )})
      }
    </div>
  );
}

export default ItemList;
