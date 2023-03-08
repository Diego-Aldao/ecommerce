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

const Descuentos = () => {
  return (
    <ContenedorDescuento>
      <TituloDescuento>
        hasta un -50% de descuento en diseños comodos
      </TituloDescuento>
      <Terminos>
        por tiempo limitado. Los articulos seleccionados se muestran rebajados
      </Terminos>
    </ContenedorDescuento>
  );
};

export default Descuentos;
