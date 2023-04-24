import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown/Dropdown";
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
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const NavDesktop = ({ navegacion }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState();
  const { categorias } = useCategorias(navegacion);

  const handleMouseOverCategoria = (categoria) => {
    setCurrentContent(categoria.children);
  };

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  return (
    <Contenedor onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
      {categorias?.map((categoria) => {
        return (
          !categoria.channelExclusions.includes("webLarge") &&
          categoria.content.title !== "Marketplace" && (
            <button
              key={categoria.id}
              onMouseOver={() => {
                handleMouseOverCategoria(categoria);
              }}
              onMouseOut={handleMouseOut}
            >
              {categoria.content.title}
            </button>
          )
        );
      })}
      <Dropdown
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        currentContent={currentContent}
      />
    </Contenedor>
  );
};

export default NavDesktop;
