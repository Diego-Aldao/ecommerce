import React from "react";
import styled from "styled-components";
import ContenedorMaxWidth from "../../../styles/ContenedorMaxWidth";
const Contenedor = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-block: 30px;
  min-height: 630px;
  @media (min-width: 580px) {
    min-height: 860px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    min-height: 345px;
  }
  @media (min-width: 1024px) {
    min-height: 440px;
  }
`;

const UltimosLanzamientos = ({ children }) => {
  return (
    <ContenedorMaxWidth>
      <Contenedor>{children}</Contenedor>
    </ContenedorMaxWidth>
  );
};

export default UltimosLanzamientos;
