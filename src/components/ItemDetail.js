import React from 'react'
import ItemDetailSkeleton from './ItemDetailSkeleton'
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react';
import {getFirestore} from '../Firebase/Firebase'


function ItemDetail() {

  const [produ,setProdu] = useState([])

  let {product_id} = useParams()

  const db = getFirestore();
  const itemCollection = db.collection("shop-products");
  const itemId = itemCollection.where('id','==',product_id)

//  useEffect(()=>{
//    fetch(`https://api.mercadolibre.com/items/${product_id}?include_attributes-all`)
//    .then(res => res.json())
//    .then(res =>{setProdu(res)})
//  },[product_id])

  useEffect(()=>{
    itemId.get().then((querySnapshot)=>{
      if(querySnapshot.size === 0){
        console.log('No results');
      }
      const temp = querySnapshot.docs.map(doc => doc.data())
      setProdu(temp[0])
    })
  },[product_id])

  return (
    <div>
        <ItemDetailSkeleton props={produ}/>
    </div>
  )
}

export default ItemDetail;
