import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import ItemListContainerV2 from '../components/ItemListContainerV2'
import ItemListAside from '../components/ItemListAside'
import '../Scss/Home/header_home.scss';

function Products() {


    return (
        <div id="products-section">
            <div className="">
            <ItemListContainerV2/>
            </div>
        </div>
    )
}

export default Products
