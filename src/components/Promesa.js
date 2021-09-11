import React from 'react'
import {useState} from 'react';


function Promesa() {

    const [valor,setValor]=useState(null)

    const array =[{
        name:"ivan",
        apellido: "sosa",
        edad:"21",
    },{
        name:"Daniel",
        apellido:"sosa",
        edad:"22",
    }]

    let promesa = new Promise((resolve,rejected)=>{
        setTimeout(()=>{
                const error = false;
                if(!error){
                    resolve(array);
                }rejected("error en la carga")
        },1000)
    })

    promesa.then((res)=>{
        setValor(res);
    }).catch((res)=>{res.console.log("error")})



    return (
        <div>

        {valor === null ? (<h2>error</h2>):(valor.map((index,value)=>{
            return(
                <h1 key={index}>hola</h1>
            )
        }))}
            
        </div>
    )
}

export default Promesa
