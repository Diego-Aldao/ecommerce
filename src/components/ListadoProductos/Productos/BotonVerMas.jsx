import React from "react";
import styled from "styled-components";
import useProductos from "../../../hooks/useProductos";
import useFiltros from "../../../hooks/useFiltros";

const VerMas = styled.div`
  width: 100%;
  padding: 30px 0px;
  .range {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 14px;
    }
    p:first-letter {
      text-transform: uppercase;
    }
    span {
      display: block;
      height: 2px;
      background: var(--color-gris);
      width: 80%;
    }
  }
  .btnVerMas {
    width: 100%;
    padding: 17px 15px 15px;
    margin-top: 20px;
    border: 3px solid var(--color-gris);
    span {
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 1px;
      font-size: 16px;
      color: black;
    }
  }
`;

const BotonVerMas = ({ longitud, itemCount }) => {
  const { filterProductos } = useProductos();
  const { filtrosFetch, setFiltrosFetch } = useFiltros();

  const handleClick = () => {
    const newOffset = Number(filtrosFetch.offset) + 1;
    const newFiltros = { ...filtrosFetch, offset: newOffset };
    filterProductos(newFiltros);
    setFiltrosFetch(newFiltros);
  };
  return (
    <VerMas>
      <div className="range">
        <p>
          has visto {longitud} de {itemCount} productos
        </p>
        <span></span>
      </div>
      <button className="btnVerMas" onClick={handleClick}>
        <span>cargar mas</span>
      </button>
    </VerMas>
  );
};

export default BotonVerMas;
