import React, { useState } from "react";
import dataDetalle from "../data/DetalleVestido.json";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import Navegacion from "../components/ListadoProductos/Navegacion";
import Galeria from "../components/DetalleProducto/Galeria";
import Info from "../components/DetalleProducto/Info";
import Main from "../components/DetalleProducto/Main";
import { useParams } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Relacionados from "../components/DetalleProducto/Relacionados";

const DetalleProducto = () => {
  const { categoria, producto } = useParams();
  const size = useWindowSize();
  const [data, setData] = useState(dataDetalle);
  return (
    <LayoutPrincipal>
      {size.width > 768 && (
        <Navegacion categoria1={categoria} producto={producto} />
      )}
      <Main>
        <Galeria data={data} />
        <Info data={data} />
        <Relacionados />
      </Main>
    </LayoutPrincipal>
  );
};

export default DetalleProducto;
