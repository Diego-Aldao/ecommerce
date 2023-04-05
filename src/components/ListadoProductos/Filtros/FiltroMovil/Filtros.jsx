import React from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 100%;
  background: var(--color-gris);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  left: ${({ position }) => (position ? "-100%" : "0px")};
  transition: var(--transition);
  overflow: hidden;
`;

const HeaderFiltros = styled.header`
  width: 100%;
  padding: 15px;
  background: white;
  h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const ListaFiltros = styled.ul`
  width: 100%;
  background: white;
  margin-top: 15px;
  padding: 0px 15px;
`;

const ItemFiltros = styled.li`
  width: 100%;
  padding: 20px 0px;
  border-bottom: 1px solid var(--color-gris);
  text-transform: capitalize;
`;

const ContenedorAplicar = styled.div`
  width: 100%;
  padding: 15px;
  background: white;
  margin-top: auto;
`;

const BtnAplicar = styled.button`
  width: 100%;
  text-transform: uppercase;
  background: black;
  color: white;
  padding: 20px;
`;

const Filtros = ({
  position,
  setPosition,
  filtros,
  setDataFiltros,
  setCurrentItem,
}) => {
  const handleClick = (filtro) => {
    setPosition(!position);
    setDataFiltros(filtro);
    setCurrentItem(filtro.id);
  };

  return (
    <Contenedor position={position}>
      <HeaderFiltros>
        <h4>filtrar</h4>
      </HeaderFiltros>
      <ListaFiltros>
        {filtros &&
          filtros.map((filtro) => {
            return (
              <ItemFiltros
                key={filtro.id}
                onClick={() => {
                  handleClick(filtro);
                }}
              >
                {filtro.name}
              </ItemFiltros>
            );
          })}
      </ListaFiltros>
      <ContenedorAplicar>
        <BtnAplicar>ver articulos</BtnAplicar>
      </ContenedorAplicar>
    </Contenedor>
  );
};

export default Filtros;
