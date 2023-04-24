import React from "react";
import styled from "styled-components";
import ItemNombreFiltros from "./ItemNombreFiltros";
import useProductos from "../../../../../hooks/useProductos";
import useFiltros from "../../../../../hooks/useFiltros";
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
  filtros,
  setPosition,
  setDataFiltros,
  setCurrentItem,
  setIsOpen,
}) => {
  const { filtrosFetch } = useFiltros();

  const { filterProductos } = useProductos();

  const handleClick = () => {
    filterProductos(filtrosFetch);
    setIsOpen(!setIsOpen);
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
              <ItemNombreFiltros
                key={filtro.id}
                setPosition={setPosition}
                setDataFiltros={setDataFiltros}
                setCurrentItem={setCurrentItem}
                filtro={filtro}
                position={position}
              />
            );
          })}
      </ListaFiltros>
      <ContenedorAplicar>
        <BtnAplicar onClick={handleClick}>ver articulos</BtnAplicar>
      </ContenedorAplicar>
    </Contenedor>
  );
};

export default Filtros;
