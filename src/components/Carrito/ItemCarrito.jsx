import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import useGuardados from "../../hooks/useGuardados";
import useCarrito from "../../hooks/useCarrito";

const Item = styled.li`
  padding: 20px 15px;
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  background: white;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gris);
  }
`;

const BtnMenu = styled.button`
  height: 22px;
  position: absolute;
  padding: 0px 5px;
  top: 16px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span {
    display: block;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: black;
  }
`;

const ImagenItem = styled.div`
  width: 110px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const InfoItem = styled.div`
  padding-left: 20px;
  width: calc(100% - 110px);
  .precio {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;
  }
  .nombre {
    height: 50px;
    overflow: hidden;
    margin: 10px 0px;
    color: #747474;
    line-height: 1.5;
  }
`;

const DataItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    font-size: 14px;
    padding-right: 10px;
    margin-right: 5px;
    position: relative;
    font-weight: 700;
  }
  p:nth-child(2) {
    text-transform: uppercase;
  }
  p:nth-child(3) {
    text-transform: capitalize;
  }
  p:not(:last-child):after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background: var(--color-gris);
    right: 0px;
    top: 0px;
  }
`;

const Opciones = styled.div`
  width: 100%;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  visibility: ${({ isVisible }) => (isVisible ? "1" : "0")};
  height: ${({ isVisible }) => (isVisible ? "100px" : "0px")};
  transition: var(--transition);
  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 15px;
    background: #fafafa;
    margin-top: 10px;

    span:first-letter {
      text-transform: uppercase;
    }
  }
  button:first-child {
    border-left: 1px solid #59de31;
    span {
      color: #59df31;
      font-weight: 700;
    }
    svg {
      fill: #59df31;
    }
  }

  button:last-child {
    border-left: 1px solid #ff6961;
    span {
      color: #ff6961;
      font-weight: 700;
    }

    svg {
      fill: #ff6961;
    }
  }
`;

const ItemCarrito = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { guardarProducto } = useGuardados();
  const { carrito, añadirProductoCarrito } = useCarrito();

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <Item key={item.id}>
      <BtnMenu onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </BtnMenu>
      <ImagenItem>
        <img src={`https://${item.imagen}`} alt="" />
      </ImagenItem>
      <InfoItem>
        <span className="precio">{item.price.current.text}</span>
        <p className="nombre">{item.name}</p>
        <DataItem>
          <p className="color">
            {item.variants ? item.variants[0].colour : item.colour}
          </p>
          <p className="talla">
            eu {item.variants ? item.variants[0].brandSize : "s"}
          </p>
          <p className="cantidad">cant: 1</p>
        </DataItem>
      </InfoItem>
      <Opciones isVisible={isVisible}>
        <button
          onClick={() => {
            guardarProducto(item);
            añadirProductoCarrito(item);
          }}
        >
          <span>guardar para mas tarde</span>
          <AiOutlineHeart />
        </button>
        <button
          onClick={() => {
            añadirProductoCarrito(item);
          }}
        >
          <span>eliminar</span>
          <AiOutlineClose />
        </button>
      </Opciones>
    </Item>
  );
};

export default ItemCarrito;
