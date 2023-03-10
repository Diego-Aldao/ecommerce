import React from "react";
import styled from "styled-components";

const ItemGrid = styled.div`
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
  return (
    <ItemGrid>
      <img src={data.imagen} alt="imagen lanzamientos hombre" />
      <h3>{data.titulo}</h3>
      <p>{data.subtitulo}</p>
    </ItemGrid>
  );
};

export default ItemLanzamientos;
