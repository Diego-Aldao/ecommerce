import React from "react";
import styled from "styled-components";
import ContenedorWidth from "../../../../styles/ContenedorMaxWidth";
import ItemFiltro from "./ItemFiltro";

const Background = styled.div`
  width: 100%;
  background: var(--color-gris);
`;

const Contenedor = styled.ul`
  width: 100%;
  display: none;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    padding: 20px 15px;
    flex-wrap: wrap;
  }
`;

const FiltroDesktop = ({ data }) => {
  return (
    <Background>
      <ContenedorWidth>
        <Contenedor>
          {data?.map((item) => {
            return <ItemFiltro key={item.id} data={item} />;
          })}
        </Contenedor>
      </ContenedorWidth>
    </Background>
  );
};

export default FiltroDesktop;
