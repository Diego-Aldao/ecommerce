import React from "react";
import styled from "styled-components";
import HeaderUsuario from "../components/Usuario/HeaderUsuario";
import FooterUsuario from "../components/Usuario/FooterUsuario";

const Contenedor = styled.main`
  width: 100%;
  background: var(--color-gris);
  padding: 0px 15px 20px;
  min-height: 100vh;
`;

const Usuario = ({ children }) => {
  return (
    <Contenedor>
      <HeaderUsuario />
      {children}
      <FooterUsuario />
    </Contenedor>
  );
};

export default Usuario;
