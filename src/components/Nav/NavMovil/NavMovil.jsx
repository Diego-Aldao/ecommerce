import React, { useState } from "react";
import styled from "styled-components";
import useCategorias from "../../../hooks/useCategorias";
import Categorias from "./Categorias";
import DetalleCategorias from "./DetalleCategorias";
import ModalFixed from "../../ModalFixed";

const ContenedorNavs = styled.div`
  width: 266px;
  height: 100%;
  background: white;
  display: flex;
  position: relative;
  overflow-x: hidden;
  max-width: 500px;
  left: ${({ isOpen }) => (isOpen ? "0px" : "-100%")};
  transition: var(--transition);
  @media (min-width: 400px) {
    width: 320px;
  }
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

  return (
    <ModalFixed isOpen={isOpen} setIsOpen={setIsOpen} className="modal-fixed">
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
    </ModalFixed>
  );
};

export default NavMovil;
