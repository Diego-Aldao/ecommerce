import React from "react";
import styled from "styled-components";

const ItemTendencia = styled.div`
  width: 100%;
`;

const ItemTendencias = ({ data }) => {
  return (
    <ItemTendencia>
      <img src={data.imagen} alt="" />
    </ItemTendencia>
  );
};

export default ItemTendencias;
