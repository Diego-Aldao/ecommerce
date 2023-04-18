import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsArrowLeft, BsCheck2, BsX } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import useFiltros from "../../../../../hooks/useFiltros";
import ItemDetalleFiltro from "./ItemDetalleFiltro";

const Contenedor = styled.div`
  width: 100%;
  height: 100%;
  left: ${({ position }) => (position ? "0px" : "100%")};
  position: absolute;
  transition: var(--transition);
  background: var(--color-gris);
  overflow: scroll;
`;

const HeaderDetalle = styled.header`
  width: 100%;
  background: white;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const Botones = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnAtras = styled.button`
  max-width: 65%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 5px;
    letter-spacing: 1px;
    text-align: left;
  }
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 0.3;
  }
`;

const BtnMarcar = styled(BtnAtras)`
  width: 50%;
  justify-content: flex-end;
  span {
    font-weight: 400;
    margin-right: 5px;
  }
  svg {
    stroke-width: 0.1;
  }
`;

const Buscador = styled.div`
  flex: 1 1 100%;
  height: 40px;
  margin-top: 10px;
  div {
    border: 1px solid #d1d1d1;
    height: 100%;
    border-radius: 25px;
    display: flex;
    padding: 0px 15px;
    input {
      width: 100%;
    }
    input::placeholder {
      text-transform: capitalize;
    }
  }
`;

const ListaFiltros = styled.ul`
  width: 100%;
  background: white;
  margin-top: 15px;
`;

const ItemFiltro = styled.li`
  width: 100%;
  padding: 20px 15px;
  border-bottom: 1px solid var(--color-gris);
  display: flex;
  text-transform: capitalize;
  p {
    margin-right: 5px;
  }
  &.seleccionado {
    position: relative;
    font-weight: 900;
    svg {
      stroke-width: 1;
    }
  }
  &.seleccionado::after {
    content: "";
    left: 0px;
    bottom: 0px;
    position: absolute;
    background: var(--color-principal);
    width: 5px;
    height: 100%;
  }
`;

const CheckSelected = styled.div`
  margin-left: auto;
  visibility: ${({ isSelected }) => (isSelected ? "visible" : "hidden")};
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0")};
`;

const DetalleFiltro = ({ position, setPosition, dataFiltros, currentItem }) => {
  const {
    changeSelectionAll,
    borrarFiltrosVacios,
    agregarKeyValue,
    seleccionados,
  } = useFiltros();

  const [iniciado, setIniciado] = useState(false);

  const handleClick = () => {
    setPosition(!position);
  };

  return (
    <Contenedor position={position}>
      <HeaderDetalle>
        <Botones>
          <BtnAtras onClick={handleClick}>
            <div>
              <BsArrowLeft></BsArrowLeft>
            </div>
            <span>{dataFiltros && dataFiltros.name}</span>
          </BtnAtras>
          {dataFiltros?.facetValues.some((obj) => obj.isSelected == true) ? (
            <BtnMarcar
              onClick={() => {
                setIniciado(true);
                changeSelectionAll(dataFiltros, false);
              }}
            >
              <span>borrar</span>
              <BsX></BsX>
            </BtnMarcar>
          ) : (
            <BtnMarcar
              onClick={() => {
                setIniciado(true);
                changeSelectionAll(dataFiltros, true);
              }}
            >
              <span>todo</span>
              <BsCheck2></BsCheck2>
            </BtnMarcar>
          )}
        </Botones>
        <Buscador>
          <div>
            <input type="search" name="" id="" placeholder="buscar" />
            <button>
              <FiSearch />
            </button>
          </div>
        </Buscador>
      </HeaderDetalle>
      <ListaFiltros>
        {dataFiltros &&
          dataFiltros.facetValues.map((filtro) => {
            return (
              <ItemDetalleFiltro
                setIniciado={setIniciado}
                filtro={filtro}
                iniciado={iniciado}
                currentItem={currentItem}
                key={filtro.id}
                clase={filtro.isSelected && "seleccionado"}
              >
                <p>{filtro.name}</p>
                <span>({filtro.count})</span>

                <CheckSelected isSelected={filtro.isSelected}>
                  <BsCheck2></BsCheck2>
                </CheckSelected>
              </ItemDetalleFiltro>
            );
          })}
      </ListaFiltros>
    </Contenedor>
  );
};

export default DetalleFiltro;
