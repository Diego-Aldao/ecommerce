import React from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 100%;
  background: var(--gradiente-secundario);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 35px 35px 10px;
`;

const Subtitulo = styled.p`
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 25px;
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

const BtnRegistro = styled.button`
  padding: 15px 35px;
  margin: 35px 0px 50px;
  background: #000;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 800;
  span {
    letter-spacing: 1px;
    padding-top: 3px;
    display: block;
    color: #fff;
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
      <BtnRegistro>
        <span>registrarme</span>
      </BtnRegistro>
      <Terminos>
        se aplican terminos y condiciones. Solo por tiempo limitado
      </Terminos>
    </Contenedor>
  );
};

export default Header;
