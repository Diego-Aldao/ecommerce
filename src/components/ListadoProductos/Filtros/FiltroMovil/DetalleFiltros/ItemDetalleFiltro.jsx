import React, { useEffect } from "react";
import styled from "styled-components";
import useFiltros from "../../../../../hooks/useFiltros";
import { BsCheck2 } from "react-icons/bs";

const Item = styled.li`
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

const ItemDetalleFiltro = ({ setIniciado, filtro, currentItem, iniciado }) => {
  const {
    changeSelection,
    seleccionados,
    borrarFiltrosVacios,
    agregarKeyValue,
  } = useFiltros();

  useEffect(() => {
    if (seleccionados.length === 0 && iniciado) {
      borrarFiltrosVacios(currentItem);
    } else if (iniciado) {
      agregarKeyValue(currentItem);
    }
  }, [seleccionados]);

  return (
    <Item
      onClick={() => {
        setIniciado(true);
        changeSelection(filtro);
      }}
      className={filtro.isSelected ? "seleccionado" : ""}
    >
      <p>{filtro.name}</p>
      <span>({filtro.count})</span>

      <CheckSelected isSelected={filtro.isSelected}>
        <BsCheck2></BsCheck2>
      </CheckSelected>
    </Item>
  );
};

export default ItemDetalleFiltro;
