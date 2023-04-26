import React from "react";
import styled from "styled-components";
import { SlTrash } from "react-icons/sl";
import useGuardados from "../../hooks/useGuardados";
import useCarrito from "../../hooks/useCarrito";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .nombre {
    height: 40px;
    max-height: 40px;
    overflow: hidden;
    font-size: 14px;
    margin-top: 10px;
    line-height: 1.4;
  }
  .precio {
    display: block;
    padding: 10px 0px;
    font-weight: 600;
  }
  .color {
    display: block;
    padding: 20px 0px;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    color: #949494;
    white-space: nowrap;
    font-weight: 300;
    overflow: hidden;
    margin: 10px 0px;
  }
  .btn-bolsa {
    text-transform: uppercase;
    padding: 12px 15px 10px;
    background: var(--gradiente-principal);
    line-height: 1.5;
    font-weight: 700;
    font-size: clamp(12px, 1.5vw, 16px);
    cursor: pointer;
  }
`;

const BtnBorrar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    height: 20px;
    width: 20px;
    color: var(--color-promo2);
  }
`;

const ItemGuardado = ({ item }) => {
  const { guardarProducto } = useGuardados();
  const { añadirProductoCarrito } = useCarrito();

  return (
    <Item>
      <BtnBorrar
        onClick={() => {
          guardarProducto(item);
        }}
      >
        <SlTrash></SlTrash>
      </BtnBorrar>

      <div>
        <img src={`https://${item.imagen}`} alt="" />
      </div>
      <p className="nombre">{item.name}</p>
      <span className="precio">{item.price.current.text}</span>
      {item.variants ? (
        <span className="color">{item.variants[0].colour}</span>
      ) : (
        <span className="color">{item.colour}</span>
      )}
      <button
        className="btn-bolsa"
        onClick={() => {
          añadirProductoCarrito(item);
          guardarProducto(item);
        }}
      >
        añadir al carrito
      </button>
    </Item>
  );
};

export default ItemGuardado;
