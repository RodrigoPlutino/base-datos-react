import React from 'react'
import '../styles/DetailContainer.css'
//import {Link} from 'react-router-dom'

function ItemCounter(props) {

    return (
        <div className="dadCounter">
            <button onClick={props.resta} >-</button>
            <p>{props.contador}</p>
            <button onClick={props.suma}>+</button>
        </div>
    )
}

export default ItemCounter;
