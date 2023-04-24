import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContenedorWidth from "../../../styles/ContenedorMaxWidth";
import ItemProductos from "./ItemProductos";
import Header from "./Header";
import BotonVerMas from "./BotonVerMas";
import Loading from "../../Loading";

const Contenedor = styled.section`
  width: 100%;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

const GridProductos = ({ productos, loading }) => {
  return (
    <ContenedorWidth className="contenedor-pequeño">
      {!loading && productos ? (
        <Contenedor>
          <Header itemCount={productos.itemCount} />
          <StyledGrid>
            {productos.products?.map((product) => (
              <ItemProductos key={product.id} producto={product} />
            ))}
          </StyledGrid>
          <BotonVerMas
            longitud={productos.products.length}
            itemCount={productos.itemCount}
          />
        </Contenedor>
      ) : (
        <Contenedor>
          <Loading />
          {productos && (
            <BotonVerMas
              longitud={productos.products.length}
              itemCount={productos.itemCount}
            />
          )}
        </Contenedor>
      )}
    </ContenedorWidth>
  );
};

export default GridProductos;
