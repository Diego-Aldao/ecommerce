import React from "react";
import styled from "styled-components";
import useProductos from "../../../hooks/useProductos";
import { useNavigate } from "react-router-dom";

const ItemTendencia = styled.div`
  width: 100%;
  cursor: pointer;
  height: 100%;
  mix-blend-mode: darken;
`;

const ItemTendencias = ({ data }) => {
  const { getProductos } = useProductos();
  const navigate = useNavigate();

  const handleClick = () => {
    let categoria = data.link;
    getProductos({ categoria });
    navigate(data.link);
  };

  return (
    <ItemTendencia onClick={handleClick}>
      <img src={data.imagen} alt="imagen tendencia" />
    </ItemTendencia>
  );
};

export default ItemTendencias;
