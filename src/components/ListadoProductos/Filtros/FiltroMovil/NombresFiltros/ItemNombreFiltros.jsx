import React from "react";
import styled from "styled-components";

const Item = styled.li`
  width: 100%;
  padding: 20px 0px;
  border-bottom: 1px solid var(--color-gris);
  text-transform: capitalize;
`;

const ItemNombreFiltros = ({
  setPosition,
  setDataFiltros,
  setCurrentItem,
  filtro,
  position,
}) => {
  const handleClick = (filtro) => {
    setPosition(!position);
    setDataFiltros(filtro);
    setCurrentItem(filtro.id);
  };
  return (
    <Item
      onClick={() => {
        handleClick(filtro);
      }}
    >
      {filtro.name}
    </Item>
  );
};

export default ItemNombreFiltros;
