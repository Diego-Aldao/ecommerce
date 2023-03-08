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
