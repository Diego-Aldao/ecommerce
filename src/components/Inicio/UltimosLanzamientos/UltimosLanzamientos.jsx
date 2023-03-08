import React from "react";
import styled from "styled-components";
import ContenedorMaxWidth from "../../../styles/ContenedorMaxWidth";
const Contenedor = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 30px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
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
