import React from "react";
import styled from "styled-components";
import ButtonLink from "./ButtonLink";

const Contenedor = styled.div`
  width: 100%;
  background: var(--gradiente-secundario);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 35px 35px 10px;
  a {
    margin: 20px 0px;
  }
`;

const Subtitulo = styled.p`
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 20px;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Titulo = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  line-height: 1.3;
  text-shadow: 0px 1px 0px #000000;
  max-width: 350px;
  @media (min-width: 768px) {
    max-width: 750px;
    font-size: 32px;
  }
`;

const Terminos = styled.span`
  display: block;
  font-size: 12px;
  margin-top: auto;
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export { Contenedor, Titulo, Terminos };

const Header = () => {
  return (
    <Contenedor>
      <Subtitulo>asos premier party</Subtitulo>
      <Titulo>hazte miembro por el -25% en todo mañana!</Titulo>
      <ButtonLink link={"/registro"}>registrarme</ButtonLink>
      <Terminos>
        se aplican terminos y condiciones. Solo por tiempo limitado
      </Terminos>
    </Contenedor>
  );
};

export default Header;
