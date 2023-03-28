import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const useCategorias = (data) => {
  const location = useLocation();
  const [categorias, setCategorias] = useState();
  const [inicio, setInicio] = useState();

  const getCategorias = (data) => {
    if (data === undefined) return;
    const dataCategorias =
      location.pathname == "/hombre"
        ? data[0].children.filter(
            (child) => child.content.title == "Categories"
          )[0].children
        : data[1].children.filter(
            (child) => child.content.title == "Categories"
          )[0].children;
    setCategorias(dataCategorias);
  };

  const getHome = (data) => {
    if (data === undefined) return;
    const dataHome =
      location.pathname == "/hombre"
        ? data[0].children[0].children[0]
        : data[1].children[0].children[0];
    setInicio(dataHome);
  };

  useEffect(() => {
    getCategorias(data);
    getHome(data);
  }, [data, location]);

  return { categorias, inicio };
};

export default useCategorias;
