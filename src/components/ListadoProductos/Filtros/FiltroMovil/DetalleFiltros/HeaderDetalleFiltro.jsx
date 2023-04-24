import React from "react";
import styled from "styled-components";
import { BsX, BsArrowLeft, BsCheck2 } from "react-icons/bs";
import useFiltros from "../../../../../hooks/useFiltros";

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

const HeaderDetalleFiltro = ({ dataFiltros, setIniciado, setPosition }) => {
  const { changeSelectionAll } = useFiltros();
  const handleClick = () => {
    setPosition((prevPosition) => !prevPosition);
  };
  return (
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
    </HeaderDetalle>
  );
};

export default HeaderDetalleFiltro;
