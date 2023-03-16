import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const useCategorias = (data) => {
  const location = useLocation();
  const [categorias, setCategorias] = useState();

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

  useEffect(() => {
    getCategorias(data);
  }, [data, location]);

  return { categorias };
};

export default useCategorias;
