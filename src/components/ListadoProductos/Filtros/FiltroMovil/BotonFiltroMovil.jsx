import React from "react";
import styled from "styled-components";

const BotonFiltro = styled.button`
  width: 100%;
  height: 50px;
  background: var(--color-gris);
  text-transform: uppercase;
  @media (min-width: 768px) {
    display: none;
  }
`;

const BotonFiltroMovil = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return <BotonFiltro onClick={handleClick}>filtrar</BotonFiltro>;
};

export default BotonFiltroMovil;
