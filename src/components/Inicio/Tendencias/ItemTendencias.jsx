import React, { useState } from "react";
import styled from "styled-components";
import useProductos from "../../../hooks/useProductos";
import { useNavigate } from "react-router-dom";

const ItemTendencia = styled.div`
  width: 100%;
  cursor: pointer;
`;

const ItemTendencias = ({ data }) => {
  const [categoria, setCategoria] = useState(data.categoria);
  const { getProductos } = useProductos({ categoria });
  const navigate = useNavigate();

  const handleClick = () => {
    getProductos();
    navigate(`/productos${data.link}`);
  };
  return (
    <ItemTendencia onClick={handleClick}>
      <img src={data.imagen} alt="" />
    </ItemTendencia>
  );
};

export default ItemTendencias;
