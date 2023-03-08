import React from "react";
import styled from "styled-components";

const ItemTendencia = styled.div`
  img {
    width: 100%;
  }
`;

const ItemTendencias = ({ column, imagenTendencia }) => {
  return (
    <ItemTendencia>
      <img src={imagenTendencia} alt="" />
    </ItemTendencia>
  );
};

export default ItemTendencias;
