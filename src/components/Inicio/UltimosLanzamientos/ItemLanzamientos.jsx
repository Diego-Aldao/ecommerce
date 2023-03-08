import React from "react";
import styled from "styled-components";

const ItemGrid = styled.div`
  img {
    width: 100%;
  }
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

const ItemLanzamientos = ({ imagenLanzamiento }) => {
  return (
    <ItemGrid>
      <img src={imagenLanzamiento} alt="" />
      <h3>trajes: el combo perfecto</h3>
      <p>sastreria en toda la regla</p>
    </ItemGrid>
  );
};

export default ItemLanzamientos;
