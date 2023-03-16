import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import useCategorias from "../../../hooks/useCategorias";
const Contenedor = styled.div`
  width: 100%;
  height: 50px;
  background: var(--gradiente-principal);
  padding: 0px 32px;
  display: none;
  position: relative;
  button {
    flex: 1 1 auto;
    padding: 10px;
    background: none;
    color: white;
    color: black;
    border: none;
    text-transform: capitalize;
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const NavDesktop = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState();
  const { categorias } = useCategorias(data);

  const handleMouseOverCategoria = (categoria) => {
    setCurrentContent(categoria.children);
  };

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  const componentesCategorias = categorias ? (
    categorias.map((categoria) => {
      let categoriaExcluidaDesktop = categoria.channelExclusions.filter(
        (exclusion) => exclusion == "webLarge"
      );
      return categoriaExcluidaDesktop == "webLarge" ? (
        <></>
      ) : (
        <button
          onMouseOver={() => {
            handleMouseOverCategoria(categoria);
          }}
          onMouseOut={handleMouseOut}
        >
          {categoria.content.title}
        </button>
      );
    })
  ) : (
    <p>loading</p>
  );

  return (
    <>
      <Contenedor onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
        {componentesCategorias}
        <Dropdown isVisible={isVisible} currentContent={currentContent} />
      </Contenedor>
    </>
  );
};

export default NavDesktop;
