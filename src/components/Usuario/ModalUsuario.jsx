import React from "react";
import styled from "styled-components";

const Contenedor = styled.section`
  width: 100%;
  background: white;
  padding-bottom: 20px;
  max-width: 480px;
  margin: 0 auto 15px;
  @media (min-width: 768px) {
    max-width: 650px;
    padding-bottom: 40px;
  }
`;

const ModalUsuario = ({ children }) => {
  return <Contenedor>{children}</Contenedor>;
};

export default ModalUsuario;
