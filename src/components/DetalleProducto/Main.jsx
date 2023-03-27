import React from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 100%;
  position: relative;
  max-width: 960px;
  margin: 0 auto 20px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0px 15px;
    grid-gap: 25px;
  }
`;

const Main = ({ children }) => {
  return <Contenedor>{children}</Contenedor>;
};

export default Main;
