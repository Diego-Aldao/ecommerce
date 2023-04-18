import React from "react";
import styled from "styled-components";
import ContenedorWidth from "../../../styles/ContenedorMaxWidth";
const Contenedor = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  margin: 30px 0px;
  grid-gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Promos = ({ children }) => {
  return (
    <ContenedorWidth>
      <Contenedor>{children}</Contenedor>
    </ContenedorWidth>
  );
};

export default Promos;
