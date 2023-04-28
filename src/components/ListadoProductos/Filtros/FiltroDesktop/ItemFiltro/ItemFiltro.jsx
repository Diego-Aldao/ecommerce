import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import useFiltros from "../../../../../hooks/useFiltros";
import Header from "./Header";

const Item = styled.li`
  width: 100%;
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
`;
const ContenidoItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .btn-drop {
    display: block;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 5px;
    height: 42px;
    text-align: left;
    width: 100%;
  }
`;

const DropdownItem = styled.div`
  position: absolute;
  width: 350px;
  background: var(--color-gris);
  display: none;
  z-index: 2;
  box-shadow: 5px 5px 5px #d4d4d465;
  &.visible {
    display: block;
  }
  &.oculto {
    display: none;
  }
  header {
    width: 100%;
    padding: 15px 10px;
    background: white;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    p {
      white-space: nowrap;
      font-size: 16px;
    }
    .btn-check {
      padding: 10px;
      text-transform: uppercase;
      border: 1px solid var(--color-gris);
      display: flex;
      span {
        display: block;
        margin-left: 5px;
      }
    }
  }
  .seleccionados {
    position: relative;
    overflow: hidden;
    width: 100%;
    span {
      margin-top: 5px;
      display: flex;
    }
    .item-seleccionado {
      font-size: 12px;
      margin-right: 10px;
    }
    &::after {
      content: "";
      width: 30%;
      height: 100%;
      background: linear-gradient(to right, #ffffff4c, #ffffff);
      position: absolute;
      right: 0;
    }
  }
  .contenido-dropdown {
    max-height: 300px;
    overflow-y: scroll;
    margin-top: 20px;
    li {
      background: white;
      padding: 15px 10px;
      margin: 10px;
      color: #636363;
      border-radius: 5px;
      position: relative;
    }
    .seleccionado {
      font-weight: 900;
    }
    .seleccionado:after {
      content: "";
      left: 0px;
      bottom: 0px;
      background: var(--color-principal);
      position: absolute;
      width: 5px;
      height: 100%;
      border-radius: 5px 0px 0px 5px;
    }
  }
`;

const ItemFiltro = ({ data }) => {
  const [claseActiva, setClaseActiva] = useState();
  const [currentItem, setCurrentItem] = useState();
  const [iniciado, setIniciado] = useState(false);
  const [currentData, setCurrentData] = useState();
  const {
    changeSelection,
    changeSelectionAll,
    borrarFiltrosVacios,
    agregarKeyValue,
    seleccionados,
    filtrosFetch,
  } = useFiltros();

  const handleClick = (currentData) => {
    setCurrentItem(currentData);
    setClaseActiva(currentData.id);
  };

  useEffect(() => {
    setCurrentData(data); //para no renderizar el componente cuando aplique filtros y cambie la data
  }, []);

  useEffect(() => {
    if (seleccionados.length === 0 && iniciado) {
      borrarFiltrosVacios(claseActiva);
    } else if (iniciado) {
      agregarKeyValue(claseActiva);
    }
  }, [seleccionados]);

  return (
    <Item
      onClick={() => {
        handleClick(currentData);
      }}
      onMouseLeave={() => {
        setClaseActiva(null);
      }}
    >
      <ContenidoItem>
        <button className="btn-drop">
          {currentData?.name} <RiArrowDownSLine></RiArrowDownSLine>
        </button>
        <DropdownItem
          className={`${
            currentData?.id == claseActiva ? "visible" : "oculto"
          } detalle`}
        >
          <Header
            seleccionados={seleccionados}
            currentData={currentData}
            setIniciado={setIniciado}
            changeSelectionAll={changeSelectionAll}
          />
          <ul className="contenido-dropdown">
            {currentItem?.facetValues.map((value) => {
              return (
                <React.Fragment key={value.id}>
                  {value.count !== 0 && (
                    <li
                      className={value.isSelected ? "seleccionado" : ""}
                      onClick={() => {
                        setIniciado(true);
                        changeSelection(value);
                      }}
                    >
                      {value.name}
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </DropdownItem>
      </ContenidoItem>
    </Item>
  );
};

export default ItemFiltro;
