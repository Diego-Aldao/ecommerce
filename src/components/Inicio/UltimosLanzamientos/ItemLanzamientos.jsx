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
      <img src={data.imagen} alt="imagen lanzamiento" />
      <h3>{data.titulo}</h3>
      <p>{data.subtitulo}</p>
    </ItemGrid>
  );
};

export default ItemLanzamientos;
