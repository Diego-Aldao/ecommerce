import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navegacion from "../components/ListadoProductos/Navegacion";
import FiltroMovil from "../components/ListadoProductos/Filtros/FiltroMovil/FiltroMovil";
import BotonFiltroMovil from "../components/ListadoProductos/Filtros/FiltroMovil/BotonFiltroMovil";
import dataProductos from "../data/productosEsp.json";
import Productos from "../components/ListadoProductos/Productos";
import FiltroDesktop from "../components/ListadoProductos/Filtros/FiltroDesktop/FiltroDesktop";
import Header from "../components/ListadoProductos/Header";
const ListadoProductos = () => {
  let { idCategoria, categoria2 } = useParams();
  const [isOpen, setIsOpen] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [filtros, setFiltros] = useState();

  useEffect(() => {
    setData(dataProductos);
    setFiltros(dataProductos.facets);
    setLoading(false);
  }, []);

  return (
    <Layout>
      <Navegacion />
      <Header nombre={categoria2} />
      <BotonFiltroMovil isOpen={isOpen} setIsOpen={setIsOpen} />
      <FiltroMovil
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={filtros}
        loading={loading}
      />
      <FiltroDesktop data={filtros} />
      <Productos data={data} />
    </Layout>
  );
};

export default ListadoProductos;
