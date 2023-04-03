import React, { useState } from "react";

const Context = React.createContext({});

export const GuardadosContextProvider = ({ children }) => {
  const guardadosStorage = JSON.parse(localStorage.getItem("Guardados"));

  const [guardados, setGuardados] = useState(
    guardadosStorage ? guardadosStorage : []
  );

  return (
    <Context.Provider value={{ guardados, setGuardados }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
