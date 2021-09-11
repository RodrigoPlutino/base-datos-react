import React, { useState } from "react";

export const orderContext = React.createContext();
export const orderUpdateContext = React.createContext();

export function CartContext({ children }) {
  const [order, setOrder] = useState([]);

  const insertOrder = (name, price, cantidad, id, image,total) => {
    let tmp = {
      id: id,
      nombre: name,
      precio: price,
      cantidad: cantidad,
      image: image,
      total : total
      
    };
    let temp = [...order];
    temp.push(tmp);
    return setOrder(temp);
  };

  const deleteItem = (index) => {
    const temp = [...order];
    temp.splice(index, 1);
    setOrder([...temp]);
  };

  return (
    <orderContext.Provider value={order}>
      <orderUpdateContext.Provider value={{ insertOrder, deleteItem }}>
        {children}
      </orderUpdateContext.Provider>
    </orderContext.Provider>
  );
}
