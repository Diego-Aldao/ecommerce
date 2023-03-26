import React, { useState } from "react";
import useCategorias from "../../../hooks/useCategorias";
import Categorias from "./Categorias";
import DetalleCategorias from "./DetalleCategorias";
import useWindowSize from "../../../hooks/useWindowSize";
import { Modal, BtnCerrar, ContenedorNavs } from "../../ModalFixed";
import styled from "styled-components";

const NavMovil = ({ setIsOpen, isOpen, data }) => {
  const [currentNav, setCurrentNav] = useState();
  const [position, setPosition] = useState(false);
  const { categorias } = useCategorias(data);
  const size = useWindowSize();

  if (size.width > 768) {
    setIsOpen(false);
  }

  const handleClick = (e) => {
    if (Object.values(e.target.classList).includes("modal-fixed")) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClick={handleClick}
      className="modal-fixed"
    >
      <ContenedorNavs isOpen={isOpen} className="left">
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
      <BtnCerrar isOpen={isOpen} setIsOpen={setIsOpen} className="left">
        <span></span>
        <span></span>
      </BtnCerrar>
    </Modal>
  );
};

export default NavMovil;
