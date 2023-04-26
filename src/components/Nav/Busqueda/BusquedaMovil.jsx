import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Contenedor = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  position: absolute;
  top: ${({ isVisible }) => (isVisible ? "50px" : "0px")};
  left: 0px;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 10px 15px;
  z-index: ${({ isVisible }) => (isVisible ? "0" : "-2")};
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledContenedorInput = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  display: flex;
  border-radius: 20px;
  background: white;
  padding: 0px 10px;
  border: 2px solid white;
  position: relative;
  input {
    width: calc(100%);
    height: 100%;
    border: none;
    padding: 0px 30px 0px 10px;
  }
  svg {
    position: absolute;
    right: 10px;
    bottom: 0px;
    height: 100%;
    width: 25px;
  }
`;

const BusquedaMovil = ({ isVisible }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") return;
    navigate(`/busqueda/${query}`);
  };
  return (
    <Contenedor isVisible={isVisible} onSubmit={handleSubmit}>
      <StyledContenedorInput>
        <input
          onChange={handleChange}
          type="search"
          placeholder="Buscar articulos y marcas"
        />
        <button>
          <FiSearch />
        </button>
      </StyledContenedorInput>
    </Contenedor>
  );
};

export default BusquedaMovil;
