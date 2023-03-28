import React from "react";
import styled from "styled-components";

const Contenedor = styled.footer`
  padding: 10px;
  background: var(--color-gris);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copy = styled.p`
  font-size: 12px;
  text-transform: uppercase;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span {
    font-size: 12px;
    text-transform: capitalize;
    padding: 5px;
    position: relative;
  }
  @media (min-width: 480px) {
    padding: 10px 0px;
    flex-direction: row;
    span {
      padding: 0px 10px;
    }
    span:after {
      content: "";
      width: 1px;
      height: 50%;
      position: absolute;
      background: var(--color-texto);
      right: 0px;
      bottom: 25%;
    }
    span:last-child {
      padding-right: 0px;
    }
    span:last-child:after {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <Contenedor>
      <Copy>@ 2022 asos</Copy>
      <Links>
        <span>datos de asos</span>
        <span>privacidad y cookies</span>
        <span>terminos y condiciones</span>
      </Links>
    </Contenedor>
  );
};

export default Footer;
