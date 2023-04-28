import React, { useEffect } from "react";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navegacion from "../components/ListadoProductos/Navegacion";
import FiltroMovil from "../components/ListadoProductos/Filtros/FiltroMovil/FiltroMovil";
import BotonFiltroMovil from "../components/ListadoProductos/Filtros/FiltroMovil/BotonFiltroMovil";
import FiltroDesktop from "../components/ListadoProductos/Filtros/FiltroDesktop/FiltroDesktop";
import Header from "../components/ListadoProductos/Header";
import useWindowSize from "../hooks/useWindowSize";
import GridProductos from "../components/ListadoProductos/Productos/GridProductos";
import useDataProductos from "../hooks/useDataProductos";

const ListadoProductos = () => {
  const {
    currentProductos,
    filtros,
    loading,
    querys,
    idCategoria,
    categoria1,
  } = useDataProductos();
  const [isOpen, setIsOpen] = useState();
  const [currentItem, setCurrentItem] = useState();
  const size = useWindowSize();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
    document.title = `Akira Ecommerce | ${
      categoria1 ? categoria1.toUpperCase() : querys.toUpperCase()
    }`;
  }, [querys, categoria1]);

  return (
    <LayoutPrincipal>
      <Navegacion querys={querys} />
      <Header
        nombre={currentProductos?.categoryName}
        busqueda={currentProductos?.searchTerm}
        loading={loading}
      />
      {size.width < 768 ? (
        <>
          <BotonFiltroMovil isOpen={isOpen} setIsOpen={setIsOpen} />
          <FiltroMovil
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            filtros={filtros}
          />
        </>
      ) : (
        <FiltroDesktop
          filtros={filtros}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          idCategoria={idCategoria}
          querys={querys}
          location={location}
          loading={loading}
        />
      )}
      <GridProductos productos={currentProductos} loading={loading} />
    </LayoutPrincipal>
  );
};

export default ListadoProductos;
