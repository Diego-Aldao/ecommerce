import React from "react";
import styled from "styled-components";
import { Contenedor, Titulo, Terminos } from "./Header";

const TituloDescuento = styled(Titulo)`
  font-size: 26px;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

const ContenedorDescuento = styled(Contenedor)`
  background: var(--color-promo);
  margin: 20px 0px;
  padding: 20px 35px 5px;
`;

const Descuentos = ({ data }) => {
  return (
    <ContenedorDescuento>
      {data !== undefined ? (
        <>
          <TituloDescuento>{data.descripcion}</TituloDescuento>
          <Terminos>{data.footer}</Terminos>
        </>
      ) : (
        <>loading</>
      )}
    </ContenedorDescuento>
  );
};

export default Descuentos;
