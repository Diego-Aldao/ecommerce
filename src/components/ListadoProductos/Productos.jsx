import React from "react";
import styled from "styled-components";
import ContenedorWidth from "../../styles/ContenedorMaxWidth";
import { BsFiles } from "react-icons/bs";
import ItemProductos from "./ItemProductos";

const Contenedor = styled.section`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 20px 0px;
  p {
    font-size: 14px;
  }
  p:last-child {
    font-size: 12px;
    margin-top: 10px;
  }
  p:last-child:first-letter {
    text-transform: uppercase;
  }
  span {
    display: inline-block;
    margin-left: 5px;
  }
`;

const GridProductos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Productos = ({ data }) => {
  return (
    <ContenedorWidth className="contenedor-pequeño">
      <Contenedor>
        <Header>
          <p>{data?.itemCount} estilos encontrados</p>
          <p>
            mas informacion sobre como estan ordenados estos productos
            <span>
              <BsFiles></BsFiles>
            </span>
          </p>
        </Header>
        <GridProductos>
          {data?.products.map((product) => {
            return (
              <ItemProductos
                key={product.id}
                producto={product}
                data={data.facets}
              />
            );
          })}
        </GridProductos>
      </Contenedor>
    </ContenedorWidth>
  );
};

export default Productos;
