import React, { useState } from "react";
import styled from "styled-components";
import useSimilares from "../../hooks/useSimilares";
import { useNavigate } from "react-router-dom";

const Contenedor = styled.section`
  padding: 0px 10px;
  max-width: 560px;
  margin: 0 auto;
  width: 100%;
  header {
    width: 100%;
    text-align: center;
    padding: 20px 0px;
  }
  h3 {
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 15px;
  }
  p {
    font-size: 12px;
  }
  p:first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    grid-column: 1 / 3;
    max-width: 100%;
  }
`;

const ContenedorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  grid-row-gap: 25px;
  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 650px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Item = styled.div`
  align-self: center;
  justify-self: center;
  span {
    display: block;
    margin-top: 10px;
    font-weight: 600;
  }
  p {
    margin-top: 10px;
  }
`;

const Relacionados = () => {
  const [currentLink, setCurrentLink] = useState();
  const { productos, getIdColor, getIdMarca, fetchData } = useSimilares();
  const navigate = useNavigate();

  const handleClick = (url, producto) => {
    let idColor = getIdColor(producto, productos.facets);
    let idMarca = getIdMarca(producto, productos.facets);
    fetchData(idColor, idMarca);
    let link = `/detalle/${url}`;
    setCurrentLink(link);
    navigate(currentLink);
  };
  return (
    <Contenedor>
      <header>
        <h3>puede que tambien te guste</h3>
        <p>mas informacion sobre como estan oredenados estos productos</p>
      </header>
      <ContenedorGrid>
        {productos?.products?.map((producto) => {
          return (
            <Item
              key={producto.id}
              onClick={() => {
                handleClick(producto.url, producto);
              }}
            >
              <img src={`https://${producto.imageUrl}`} alt="" />
              <span>{producto.price.current.text}</span>
              <p>{producto.brandName}</p>
            </Item>
          );
        })}
      </ContenedorGrid>
    </Contenedor>
  );
};

export default Relacionados;
