import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BusquedaNavPrincipal = styled.div`
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

const ContenedorInput = styled.form`
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

const BusquedaDesktop = () => {
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
    <BusquedaNavPrincipal>
      <ContenedorInput onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar artículos y marcas"
        />
        <button>
          <FiSearch />
        </button>
      </ContenedorInput>
    </BusquedaNavPrincipal>
  );
};

export default BusquedaDesktop;
