import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  h3 {
    text-align: center;
    text-transform: uppercase;
    padding: 70px 0px 20px;
    font-size: 32px;
    letter-spacing: -1px;
  }
`;

const HeaderUsuario = () => {
  return (
    <Header>
      <h3>
        <Link to="/">asos</Link>
      </h3>
    </Header>
  );
};

export default HeaderUsuario;
