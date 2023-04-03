import React from "react";
import styled from "styled-components";
import PreviewGuardados from "./Carrito/PreviewGuardados";

const ContenedorVacio = styled.div`
  height: calc(100vh - 136px);
  position: relative;
  display: flex;
  flex: 1 0 auto;
  min-height: 444px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  @media (min-width: 480px) {
    height: calc(100vh - 102px);
  }
  @media (min-width: 768px) {
    height: calc(100vh - 352px);
  }
  @media (min-width: 1024px) {
    min-height: 402px;
    height: calc(100vh - 402px);
  }
`;

const InfoVacio = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 0px 20px;
  svg {
    height: 30px;
    width: 30px;
  }
  h3 {
    line-height: 1.5;
    margin: 10px 0px 20px;
  }
  h3::first-letter {
    text-transform: uppercase;
  }
  p {
    margin-bottom: 20px;
  }
  p:first-letter {
    text-transform: uppercase;
  }
  button {
    background: black;
    width: 280px;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    padding: 18px 0px 16px;
    font-size: 16px;
  }
`;

const SinProductos = ({ data }) => {
  let { icono, titulo, descripcion, boton, carrito } = data;
  return (
    <ContenedorVacio>
      <InfoVacio>
        <span>{icono}</span>
        <h3>{titulo}</h3>
        {descripcion && <p>{descripcion}</p>}
        {boton && <button>volver al inicio</button>}
      </InfoVacio>
      {carrito && !boton && <PreviewGuardados />}
    </ContenedorVacio>
  );
};

export default SinProductos;
