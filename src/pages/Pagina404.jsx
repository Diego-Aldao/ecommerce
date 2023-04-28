import React from "react";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledError = styled.div`
  width: 100%;
  height: calc(100vh - 136px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 18vw;
    color: var(--color-principal);
    background: var(--gradiente-principal);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  a {
    background: black;
    color: white;
    padding: 12px 15px 10px;
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
  }

  @media (min-width: 480px) {
    height: calc(100vh - 102px);
  }
  @media (min-width: 768px) {
    height: calc(100vh - 349px);
    a {
      font-size: 16px;
    }
    p {
      font-size: 20px;
    }
  }
  @media (min-width: 1024px) {
    height: calc(100vh - 399px);
  }
`;

const Pagina404 = () => {
  return (
    <LayoutPrincipal>
      <StyledError>
        <h2>404</h2>
        <p>ups, página no encontrada</p>
        <Link to="/">volver al inicio</Link>
      </StyledError>
    </LayoutPrincipal>
  );
};

export default Pagina404;
