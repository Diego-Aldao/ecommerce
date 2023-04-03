import React, { useState, useEffect } from "react";
import useGuardados from "../../hooks/useGuardados";
import styled from "styled-components";
import ContenedorWidth from "../../styles/ContenedorMaxWidth";
import ItemGuardado from "./ItemGuardado";
import { FaHeartBroken } from "react-icons/fa";
import SinProductos from "../SinProductos";

const Contenedor = styled.section`
  width: 100%;
  header {
    background: var(--color-gris);
    text-align: center;
    padding: 25px 0px;
    h3 {
      font-size: 24px;
    }
    h3::first-letter {
      text-transform: uppercase;
    }
  }
  .articulos {
    font-size: 14px;
    padding: 10px 0px;
    color: #8b8b8b;
  }
  @media (min-width: 1024px) {
    .contenedor-pequeño {
      margin-top: 15px;
    }
  }
`;

const GridGuardados = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 7.5px));
  grid-column-gap: 15px;
  grid-row-gap: 30px;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Guardados = () => {
  const { guardados } = useGuardados();
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      ...data,
      icono: <FaHeartBroken />,
      titulo: "no tienes ningun articulo guardado",
      boton: true,
      carrito: false,
    });
  }, [guardados]);

  return (
    <Contenedor>
      {guardados.length >= 1 ? (
        <>
          <header>
            <h3>artículos guardados</h3>
          </header>
          <ContenedorWidth className="contenedor-pequeño">
            <p className="articulos">{guardados.length} articulos</p>
            <GridGuardados>
              {guardados.map((guardado) => {
                return <ItemGuardado item={guardado} data={guardados} />;
              })}
            </GridGuardados>
          </ContenedorWidth>
        </>
      ) : (
        <SinProductos data={data} />
      )}
    </Contenedor>
  );
};

export default Guardados;
