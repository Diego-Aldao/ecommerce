import React from "react";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";

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

const ModalFixed = ({ children, isOpen, className, setIsOpen }) => {
  const size = useWindowSize();

  if (size.width > 768) {
    setIsOpen(false);
  }

  const handleClick = (e) => {
    if (e.target.classList[2] == "modal-fixed") {
      setIsOpen(!isOpen);
    }
  };
  return (
    <MainContenedor
      onClick={handleClick}
      isOpen={isOpen}
      className={
        className
      } /*Para extender estilos, styled-components pasa un nombre de clase como props al componente extendido */
    >
      {children}
    </MainContenedor>
  );
};

export default ModalFixed;
