import React from "react";
import styled from "styled-components";
import { BsX, BsCheck2 } from "react-icons/bs";

const StyledHeader = styled.header`
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
`;

const Header = ({
  seleccionados,
  currentData,
  setIniciado,
  changeSelectionAll,
}) => {
  return (
    <StyledHeader>
      <div className="seleccionados">
        <p>{seleccionados.length} seleccionados</p>
        <span className="seleccionados">
          {seleccionados.map((seleccionado) => {
            return (
              <p className="item-seleccionado" key={seleccionado.id}>
                {seleccionado.name},
              </p>
            );
          })}
        </span>
      </div>
      {currentData?.facetValues.some((obj) => obj.isSelected == true) ? (
        <button
          className="btn-check"
          onClick={() => {
            setIniciado(true);
            changeSelectionAll(currentData, false);
          }}
        >
          <BsX></BsX> <span>borrar</span>
        </button>
      ) : (
        <button
          className="btn-check"
          onClick={() => {
            setIniciado(true);
            changeSelectionAll(currentData, true);
          }}
        >
          <BsCheck2></BsCheck2> <span>todo</span>
        </button>
      )}
    </StyledHeader>
  );
};

export default Header;
