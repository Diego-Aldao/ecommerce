import React, { useState } from "react";

const Context = React.createContext({});

export const CategoriaContextProvider = ({ children }) => {
  const [categoria, setCategoria] = useState();
  return (
    <Context.Provider value={{ categoria, setCategoria }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
