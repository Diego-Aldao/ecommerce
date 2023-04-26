import { useState, useEffect } from "react";
import useProductos from "./useProductos";
import { useParams } from "react-router-dom";

const useDataProductos = () => {
  const initialProductos = JSON.parse(localStorage.getItem("Productos"));
  let { querys, idCategoria, categoria1 } = useParams();
  const [filtros, setFiltros] = useState();
  const { productos, getProductos, searchProductos, loading } = useProductos();
  const [currentProductos, setCurrentProductos] = useState(
    initialProductos && initialProductos
  );
  useEffect(() => {
    if (!idCategoria) return;
    const lastFetch = localStorage.getItem("LastFetch");
    let currentCategoria = idCategoria.replaceAll("categoryId=", "");

    if (
      location.pathname.includes("productos") &&
      lastFetch != currentCategoria
    ) {
      getProductos({ idCategoria: currentCategoria });
    } else if (
      location.pathname.includes("productos") &&
      lastFetch == currentCategoria
    ) {
      setCurrentProductos(initialProductos);
      setFiltros(initialProductos?.facets);
    }
  }, [idCategoria]);

  useEffect(() => {
    if (!querys) return;
    const lastFetch = localStorage.getItem("LastFetch");

    if (location.pathname.includes("busqueda") && lastFetch != querys) {
      searchProductos({ querys });
    } else if (location.pathname.includes("busqueda") && lastFetch == querys) {
      setCurrentProductos(initialProductos);
      setFiltros(initialProductos ? initialProductos.facets : null);
    }
  }, [querys]);

  useEffect(() => {
    if (initialProductos) return;
    let currentCategoria = idCategoria.replaceAll("categoryId=", "");
    getProductos({ idCategoria: currentCategoria });
  }, []);
  //por si la primer pagina a la que se llega es esta y initialProductos no existe

  useEffect(() => {
    if (!productos) return;
    setCurrentProductos(productos);
    setFiltros(productos.facets);
  }, [productos]);

  return {
    currentProductos,
    filtros,
    loading,
    querys,
    idCategoria,
    categoria1,
  };
};

export default useDataProductos;
