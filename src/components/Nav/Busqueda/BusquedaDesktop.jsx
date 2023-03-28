import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const BusquedaNavPrincipal = styled.form`
  flex: 1 1 auto;
  height: 100%;
  padding: 10px 15px;
  display: none;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
  }
  &::selection {
    border: 1px solid aqua;
  }
`;

const ContenedorInput = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
  color: black;
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  z-index: 9;
  input {
    font-size: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 0;
    height: 100%;
    padding-left: 16px;
    padding-right: 70px;
  }
  button {
    width: 50px;
    height: 100%;
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
  svg {
    width: 22px;
    height: 22px;
  }
`;

const ContenedorSugerencias = styled.ul`
  width: calc(100% - 30px);
  border-radius: 25px 25px 0px 0px;
  position: absolute;
  top: 10px;
  left: 15px;
  background: var(--color-gris);
  z-index: 8;
  padding: 70px 15px 10px;
  display: none;
`;

const ItemSugerencia = styled.li`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
`;

const BusquedaDesktop = () => {
  const [contador, setContador] = useState(200);

  const handleKeyDown = () => {
    setContador((prevValue) => prevValue + 1);
  };
  return (
    <BusquedaNavPrincipal>
      <ContenedorInput>
        <input
          type="search"
          name="q"
          id="search"
          onKeyDown={handleKeyDown}
          placeholder="Buscar artículos y marcas"
        />
        <button>
          <FiSearch />
        </button>
      </ContenedorInput>
      <ContenedorSugerencias tamaño={contador}>
        <ItemSugerencia>
          <span>ASOS bikini</span>
          <span>796</span>
        </ItemSugerencia>
        <ItemSugerencia>
          <span>ASOS trajes</span>
          <span>776</span>
        </ItemSugerencia>
        <ItemSugerencia>
          <span>Vestidos Asimetricos</span>
          <span>16</span>
        </ItemSugerencia>
      </ContenedorSugerencias>
    </BusquedaNavPrincipal>
  );
};

export default BusquedaDesktop;
