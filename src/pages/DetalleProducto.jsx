import React, { useEffect } from "react";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import Navegacion from "../components/ListadoProductos/Navegacion";
import Galeria from "../components/DetalleProducto/Galeria/Galeria";
import Info from "../components/DetalleProducto/Info";
import Main from "../components/DetalleProducto/Main";
import { useParams } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Relacionados from "../components/DetalleProducto/Relacionados";
import useDetalleProducto from "../hooks/useDetalleProducto";

const DetalleProducto = () => {
  const { categoria, producto } = useParams();
  const size = useWindowSize();
  const { getDetalleProducto, detalle, loading } = useDetalleProducto();
  const detalleStorage = JSON.parse(localStorage.getItem("DetalleProducto"));

  const productoId = detalleStorage.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Akira Ecommerce | ${categoria.toUpperCase()}`;
  }, [detalle, detalleStorage]);

  useEffect(() => {
    let lastFetch = Number(localStorage.getItem("LastFetch"));
    if (!productoId || productoId === lastFetch) return;
    getDetalleProducto({ productoId });
  }, [productoId]);

  return (
    <LayoutPrincipal>
      {size.width > 768 && (
        <Navegacion categoria1={categoria} producto={producto} />
      )}
      <Main>
        {!loading && detalle ? (
          <>
            <Galeria data={detalle} />
            <Info data={detalle} />
            <Relacionados loading={loading} />
          </>
        ) : (
          <>
            <Galeria data={detalleStorage} />
            <Info data={detalleStorage} />
            <Relacionados loading={loading} />
          </>
        )}
      </Main>
    </LayoutPrincipal>
  );
};

export default DetalleProducto;
