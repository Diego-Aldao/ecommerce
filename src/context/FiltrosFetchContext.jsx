import React, { useState } from "react";

const Context = React.createContext({});

export const FiltrosFetchContextProvider = ({ children }) => {
  const [filtrosFetch, setFiltrosFetch] = useState();
  return (
    <Context.Provider value={{ filtrosFetch, setFiltrosFetch }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
