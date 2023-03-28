import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background: #f5f5f5;
`;

const Contenedor = styled.ul`
  width: 100%;
  display: none;
  max-width: 960px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    padding: 20px 20px 0px;
    li {
      flex: 1 1 auto;
    }
    h3 {
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 1px;
      padding-bottom: 10px;
      line-height: 30px;
      color: #636363;
    }
  }
`;

const ListaLinks = styled.ul`
  width: 100%;
  li {
    padding: 0px 5px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 400;
    color: #5f5f5f;
  }
  li:first-letter {
    text-transform: uppercase;
  }
`;
const FooterDesktop = () => {
  return (
    <Background>
      <Contenedor>
        <li>
          <h3>informacion y ayuda</h3>
          <ListaLinks>
            <li>ayuda</li>
            <li>estado del pedido</li>
            <li>envios y devoluciones</li>
            <li>asos premier</li>
            <li>10% off estudiantes</li>
            <li>mapa del sitio</li>
          </ListaLinks>
        </li>
        <li>
          <h3>informacion y ayuda</h3>
          <ListaLinks>
            <li>ayuda</li>
            <li>estado del pedido</li>
            <li>envios y devoluciones</li>
            <li>asos premier</li>
            <li>10% off estudiantes</li>
            <li>mapa del sitio</li>
          </ListaLinks>
        </li>
        <li>
          <h3>informacion y ayuda</h3>
          <ListaLinks>
            <li>ayuda</li>
            <li>estado del pedido</li>
            <li>envios y devoluciones</li>
            <li>asos premier</li>
            <li>10% off estudiantes</li>
            <li>mapa del sitio</li>
          </ListaLinks>
        </li>
      </Contenedor>
    </Background>
  );
};

export default FooterDesktop;
