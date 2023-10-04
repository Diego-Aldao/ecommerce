import React, { useState } from "react";

const Context = React.createContext({});

export const FiltrosFetchContextProvider = ({ children }) => {
  let initialParams = {
    store: "ES",
    offset: "0",
    limit: "48",
    country: "ES",
    currency: "EUR",
    sizeSchema: "ES",
    lang: "es-ES",
    categoryId: `4200`,
    sort: "freshness",
  };

  const [filtrosFetch, setFiltrosFetch] = useState(initialParams);
  return (
    <Context.Provider value={{ filtrosFetch, setFiltrosFetch }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
