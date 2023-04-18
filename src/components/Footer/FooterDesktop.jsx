import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background: #f5f5f5;
`;

const Contenedor = styled.ul`
  width: 100%;
  display: none;
  max-width: 1000px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 24px 0px;
    li {
      flex: 1 1 auto;
    }
    .especial {
      width: 100%;
      padding-block: 10px;
      border-top: 1px solid #bbbbbb;
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
  @media (min-width: 1024px) {
    padding-inline: 32px;
  }
`;

const ListaLinks = styled.ul`
  width: 100%;
  margin-bottom: 20px;
  li {
    line-height: 2;
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
            <li>mapa del sitio</li>
          </ListaLinks>
        </li>
        <li>
          <h3>sobre asos</h3>
          <ListaLinks>
            <li>sobre nosotros</li>
            <li>carreras en asos</li>
            <li>responsabilidad corporativa</li>
            <li>sitio de inversores</li>
          </ListaLinks>
        </li>
        <li>
          <h3>mas sobre asos</h3>
          <ListaLinks>
            <li>aplicacion movil</li>
            <li>asos marketplace</li>
            <li>cupones de regalo</li>
            <li>black friday</li>
          </ListaLinks>
        </li>
        <li className="especial">
          <p>
            Estas en <strong>Argentina</strong>
          </p>
        </li>
      </Contenedor>
    </Background>
  );
};

export default FooterDesktop;
