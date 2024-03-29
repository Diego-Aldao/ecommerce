import React from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Titulo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    min-height: 50px;
    text-transform: uppercase;
    font-size: clamp(24px, 3vw, 32px);
    width: 600px;
    text-align: center;
  }
`;

const Header = ({ nombre, busqueda, loading }) => {
  return (
    <Titulo>
      <h3>
        {loading ? (
          <Loader height={"50px"} width={"100%"} />
        ) : (
          <>{busqueda ? <>buscaste "{busqueda}"</> : <>{nombre}</>}</>
        )}
      </h3>
    </Titulo>
  );
};

export default Header;
