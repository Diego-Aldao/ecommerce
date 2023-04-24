import React from "react";
import styled from "styled-components";
import { BsFiles } from "react-icons/bs";

const Contenedor = styled.header`
  width: 100%;
  text-align: center;
  padding: 20px 0px;
  p {
    font-size: 14px;
  }
  p:last-child {
    font-size: 12px;
    margin-top: 10px;
  }
  p:last-child:first-letter {
    text-transform: uppercase;
  }
  span {
    display: inline-block;
    margin-left: 5px;
  }
`;

const Header = ({ itemCount }) => {
  return (
    <Contenedor>
      <p>{itemCount} estilos encontrados</p>
      <p>
        mas información sobre cómo están ordenados estos productos
        <span>
          <BsFiles></BsFiles>
        </span>
      </p>
    </Contenedor>
  );
};

export default Header;
