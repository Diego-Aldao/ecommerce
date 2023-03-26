import React from "react";
import styled from "styled-components";

const Titulo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    text-transform: uppercase;
    font-size: clamp(24px, 3vw, 32px);
  }
`;

const Header = ({ nombre }) => {
  const nombreCategoria = nombre.replaceAll("-", " ");

  return (
    <Titulo>
      <h3>{nombreCategoria}</h3>
    </Titulo>
  );
};

export default Header;
