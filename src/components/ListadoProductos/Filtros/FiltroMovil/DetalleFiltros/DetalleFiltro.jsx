import React, { useState } from "react";
import styled from "styled-components";
import ItemDetalleFiltro from "./ItemDetalleFiltro";
import HeaderDetalleFiltro from "./HeaderDetalleFiltro";

const Contenedor = styled.div`
  width: 100%;
  height: 100%;
  left: ${({ position }) => (position ? "0px" : "100%")};
  position: absolute;
  transition: var(--transition);
  background: var(--color-gris);
  overflow: scroll;
`;

const ListaFiltros = styled.ul`
  width: 100%;
  background: white;
  margin-top: 15px;
`;

const DetalleFiltro = ({ position, setPosition, dataFiltros, currentItem }) => {
  const [iniciado, setIniciado] = useState(false);

  return (
    <Contenedor position={position}>
      <HeaderDetalleFiltro
        setIniciado={setIniciado}
        dataFiltros={dataFiltros}
        setPosition={setPosition}
      />

      <ListaFiltros>
        {dataFiltros &&
          dataFiltros.facetValues.map((filtro) => {
            return (
              <ItemDetalleFiltro
                setIniciado={setIniciado}
                filtro={filtro}
                iniciado={iniciado}
                currentItem={currentItem}
                key={filtro.id}
                clase={filtro.isSelected ? "seleccionado" : ""}
              ></ItemDetalleFiltro>
            );
          })}
      </ListaFiltros>
    </Contenedor>
  );
};

export default DetalleFiltro;
