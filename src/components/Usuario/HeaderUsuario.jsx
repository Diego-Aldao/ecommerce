import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";

const Header = styled.header`
  width: 100%;
  h3 {
    text-align: center;
    padding: 70px 0px 20px;
  }
  h3:first-letter {
    text-transform: uppercase;
  }
  p {
    font-size: 2rem;
    margin-left: 10px;
  }
`;

const HeaderUsuario = () => {
  return (
    <Header>
      <h3>
        <Link to="/">
          volver a
          <Logo />
        </Link>
      </h3>
    </Header>
  );
};

export default HeaderUsuario;
