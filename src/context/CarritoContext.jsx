import React, { useState } from "react";

const Context = React.createContext({});

export const CarritoContextProvider = ({ children }) => {
  const guardadosStorage = JSON.parse(localStorage.getItem("Carrito"));

  const [carrito, setCarrito] = useState(
    guardadosStorage ? guardadosStorage : []
  );

  return (
    <Context.Provider value={{ carrito, setCarrito }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
