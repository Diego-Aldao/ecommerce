import React, { useState } from "react";
import useCategorias from "../../../hooks/useCategorias";
import Categorias from "./Categorias";
import DetalleCategorias from "./DetalleCategorias";
import { Modal, BtnCerrar, ContenedorNavs } from "../../ModalFixed";
import Loading from "../../Loading";

const NavMovil = ({ setIsOpen, isOpen, navegacion, loading }) => {
  const [currentNav, setCurrentNav] = useState();
  const [position, setPosition] = useState(false);
  const { categorias, inicio } = useCategorias(navegacion);

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
      {loading ? (
        <Loading maxWidth={"500px"} />
      ) : (
        <ContenedorNavs isOpen={isOpen} className="left">
          <Categorias
            setIsOpen={setIsOpen}
            currentNav={currentNav}
            setCurrentNav={setCurrentNav}
            position={position}
            setPosition={setPosition}
            categorias={categorias}
            inicio={inicio}
          />
          <DetalleCategorias
            setIsOpen={setIsOpen}
            currentNav={currentNav}
            position={position}
            setPosition={setPosition}
            setCurrentNav={setCurrentNav}
          />
        </ContenedorNavs>
      )}
      <BtnCerrar isOpen={isOpen} setIsOpen={setIsOpen} className="left">
        <span></span>
        <span></span>
      </BtnCerrar>
    </Modal>
  );
};

export default NavMovil;
