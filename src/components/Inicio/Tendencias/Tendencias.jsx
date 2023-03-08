import React from "react";
import styled from "styled-components";

const Contenedor = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 10px;
  grid-gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50px 1fr 1fr;
    justify-content: center;
  }
`;

const HeaderTendencias = styled.header`
  width: 100%;
  text-align: center;
  grid-column: 1 / 3;
  margin-bottom: 20px;
  h2 {
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1.5;
  }
  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const Tendencias = ({ children }) => {
  return (
    <Contenedor>
      <HeaderTendencias>
        <h2>marcas que son tendencia</h2>
      </HeaderTendencias>
      {children}
    </Contenedor>
  );
};

export default Tendencias;
