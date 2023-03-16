import React, { useState } from "react";
import styled from "styled-components";
import useCategorias from "../../../hooks/useCategorias";
import Categorias from "./Categorias";
import DetalleCategorias from "./DetalleCategorias";

const MainContenedor = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #00000057;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  display: flex;
  transition: var(--transition);
  z-index: 99;
`;

const ContenedorNavs = styled.div`
  flex: 1 1 auto;
  height: 100%;
  background: white;
  display: flex;
  position: relative;
  overflow-x: hidden;
  max-width: 500px;
  left: ${({ isOpen }) => (isOpen ? "0px" : "-100%")};
  transition: var(--transition);
`;

const BtnCerrar = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  position: relative;
  left: ${({ isOpen }) => (isOpen ? "0px" : "-100%")};
  transition: var(--transition);
  span {
    position: absolute;
    width: 30px;
    height: 3px;
    background: white;
    transform: rotate(45deg);
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
  }
`;

const NavMovil = ({ setIsOpen, isOpen, data }) => {
  const [currentNav, setCurrentNav] = useState();
  const [position, setPosition] = useState(false);
  const { categorias } = useCategorias(data);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickEspecial = (e) => {
    if (e.target.classList[2] == "contenedor-nav-movil") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <MainContenedor
      isOpen={isOpen}
      className="contenedor-nav-movil"
      onClick={handleClickEspecial}
    >
      <ContenedorNavs isOpen={isOpen}>
        <Categorias
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
          position={position}
          setPosition={setPosition}
          categorias={categorias}
        />
        <DetalleCategorias
          currentNav={currentNav}
          position={position}
          setPosition={setPosition}
          setCurrentNav={setCurrentNav}
        />
      </ContenedorNavs>
      <BtnCerrar onClick={handleClick} isOpen={isOpen}>
        <span></span>
        <span></span>
      </BtnCerrar>
    </MainContenedor>
  );
};

export default NavMovil;
