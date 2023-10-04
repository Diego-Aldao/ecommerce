import React from "react";
import styled from "styled-components";
import useProductos from "../../../hooks/useProductos";
import { useNavigate } from "react-router-dom";

const ItemGrid = styled.div`
  cursor: pointer;
  h3 {
    text-align: center;
    padding: 15px 0px;
    line-height: 1.4;
    text-transform: uppercase;
    font-size: 14px;
  }
  div {
    height: 60vw;
    border-radius: 5px;
    overflow: hidden;
    @media (min-width: 768px) {
      height: 29vw;
    }
    @media (min-width: 1240px) {
      height: 380px;
    }
  }
  p {
    text-align: center;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

const ItemLanzamientos = ({ data }) => {
  const { getProductos } = useProductos();
  const navigate = useNavigate();

  const handleClick = () => {
    let categoria = data.categoria;
    getProductos(categoria);
    navigate(data.link);
  };

  return (
    <ItemGrid onClick={handleClick}>
      <div>
        <img src={data.imagen} alt="imagen lanzamiento" />
      </div>
      <h3>{data.titulo}</h3>
      <p>{data.subtitulo}</p>
    </ItemGrid>
  );
};

export default ItemLanzamientos;
