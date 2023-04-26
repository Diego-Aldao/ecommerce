import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  cursor: pointer;
  span {
    display: block;
    margin-top: 10px;
    font-weight: 600;
  }
  p {
    margin-top: 10px;
  }
`;

const Relacionados = ({ loading }) => {
  const [currentProductos, setCurrentProductos] = useState();

  useEffect(() => {
    const productosLS = JSON.parse(localStorage.getItem("Productos"));
    const currentProductos = productosLS.products.slice(0, 20);
    setCurrentProductos(currentProductos);
  }, [loading]);
  const navigate = useNavigate();

  const handleClick = (producto) => {
    let productoLS = {
      id: producto.id,
      colour: producto.colour,
      name: producto.name,
      price: producto.price,
      imageUrl: producto.imageUrl,
      desdeProductos: true,
    };
    localStorage.setItem("DetalleProducto", JSON.stringify(productoLS));
    navigate(`/detalle/${producto.url}`);
  };

  return (
    <Contenedor>
      <header>
        <h3>puede que tambien te guste</h3>
        <p>mas informacion sobre como estan oredenados estos productos</p>
      </header>
      <ContenedorGrid>
        {currentProductos?.map((producto) => {
          return (
            <Item
              key={producto.id}
              onClick={() => {
                handleClick(producto);
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
