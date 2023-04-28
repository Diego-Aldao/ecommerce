import React from "react";
import styled from "styled-components";
import ContenedorWidth from "../../../styles/ContenedorMaxWidth";
import ItemProductos from "./ItemProductos";
import Header from "./Header";
import BotonVerMas from "./BotonVerMas";
import Loader from "../../Loader";

const Contenedor = styled.section`
  width: 100%;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  @media (min-width: 1024px) {
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
          <Loader width={"100%"} height={"100vh"} />
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
