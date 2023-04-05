import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  padding-top: 20px;
  background: var(--color-gris);
  display: flex;
  justify-content: center;
  a {
    font-size: 12px;
    text-decoration: underline;
    text-transform: capitalize;
  }
  a:first-child {
    padding-right: 10px;
    margin-right: 10px;
    position: relative;
  }
  a:first-child:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    right: 0px;
    top: 0px;
    background: #aaaaaa;
  }
  @media (min-width: 768px) {
    margin-top: 80px;
  }
`;

const FooterUsuario = () => {
  return (
    <Footer>
      <a>política de privacidad</a>
      <a>términos y condiciones</a>
    </Footer>
  );
};

export default FooterUsuario;
