import React from "react";
import styled from "styled-components";
import ContenedorWidth from "../../../styles/ContenedorMaxWidth";

const Contenedor = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 30px 0px;
  justify-items: center;
  @media (min-width: 580px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const HeaderTendencias = styled.header`
  width: 100%;
  text-align: center;
  grid-column: 1 / 3;
  padding-top: 20px;
  h2 {
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1.5;
  }
  @media (min-width: 580px) {
    grid-column: 1 / 4;
  }
  @media (min-width: 992px) {
    grid-column: 1 / 7;
  }
`;

const Tendencias = ({ children }) => {
  return (
    <ContenedorWidth>
      <Contenedor>
        <HeaderTendencias>
          <h2>marcas que son tendencia</h2>
        </HeaderTendencias>
        {children}
      </Contenedor>
    </ContenedorWidth>
  );
};

export default Tendencias;
