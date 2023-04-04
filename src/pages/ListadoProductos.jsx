import React, { useContext } from "react";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navegacion from "../components/ListadoProductos/Navegacion";
import FiltroMovil from "../components/ListadoProductos/Filtros/FiltroMovil/FiltroMovil";
import BotonFiltroMovil from "../components/ListadoProductos/Filtros/FiltroMovil/BotonFiltroMovil";
import dataProductos from "../data/productosMujer.json";
import Productos from "../components/ListadoProductos/Productos";
import FiltroDesktop from "../components/ListadoProductos/Filtros/FiltroDesktop/FiltroDesktop";
import Header from "../components/ListadoProductos/Header";
import CategoriaContext from "../context/IdCategoriaContext";

const ListadoProductos = () => {
  let { genero, categoria1, categoria2, idCategoria } = useParams();
  const [isOpen, setIsOpen] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [filtros, setFiltros] = useState();
  const { setCategoria } = useContext(CategoriaContext);

  useEffect(() => {
    setData(dataProductos);
    setFiltros(dataProductos.facets);
    setLoading(false);
    setCategoria(idCategoria);
  }, []);

  return (
    <LayoutPrincipal>
      <Navegacion
        genero={genero}
        categoria1={categoria1}
        categoria2={categoria2}
      />
      <Header nombre={categoria2 ? categoria2 : categoria1} />
      <BotonFiltroMovil isOpen={isOpen} setIsOpen={setIsOpen} />
      <FiltroMovil
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={filtros}
        loading={loading}
      />
      <FiltroDesktop data={filtros} />
      <Productos data={data} idCategoria={idCategoria} />
    </LayoutPrincipal>
  );
};

export default ListadoProductos;
