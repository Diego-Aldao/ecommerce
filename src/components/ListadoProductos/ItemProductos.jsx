import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useSimilares from "../../hooks/useSimilares";

const Item = styled.div`
  .imagen-producto {
    position: relative;
    span {
      display: block;
      position: absolute;
    }
    .arrasando {
      right: 0px;
      bottom: 28%;
      background: black;
      color: white;
      padding: 5px;
      border-radius: 20px 0px 0px 20px;
    }
    .liked {
      right: 10px;
      bottom: 15px;
      background: #ffffffdc;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 5px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
  }
  .nombre-producto {
    font-size: 14px;
    line-height: 1.5;
    height: 45px;
    max-height: 45px;
    overflow: hidden;
    position: relative;
  }
  .nombre-producto:after {
    content: "";
    width: 50px;
    height: 50%;
    position: absolute;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(to left, #ffffff, #ffffff58);
  }
  .contenedor-precio {
    align-items: center;
  }
  .precio-producto {
    display: block;
    padding: 10px 0px;
    font-weight: 500;
  }
  .old-precio {
    text-decoration: line-through;
    font-size: 12px;
    padding: 5px 0px;
  }
  .new-precio {
    color: var(--color-promo2);
  }

  @media (min-width: 768px) {
    .imagen-producto {
      .liked {
        width: 36px;
        height: 36px;
        padding: 7px;
      }
    }
  }
`;

const ItemProductos = ({ producto, data }) => {
  const navigate = useNavigate();
  const [currentLink, setCurrentLink] = useState();
  const { getIdColor, getIdMarca, fetchData } = useSimilares();

  const handleClick = (url, producto) => {
    let idColor = getIdColor(producto, data);
    let idMarca = getIdMarca(producto, data);

    fetchData(idColor, idMarca);

    let link = `/detalle/${url}`;
    setCurrentLink(link);
    navigate(currentLink);
  };
  return (
    <Item>
      <div
        className="imagen-producto"
        onClick={() => {
          handleClick(producto.url, producto);
        }}
      >
        {producto.isSellingFast && <span className="arrasando">arrasando</span>}
        <span className="liked">
          <AiOutlineHeart></AiOutlineHeart>
        </span>
        <img src={`https://${producto.imageUrl}`} alt="" />
      </div>
      <p className="nombre-producto">{producto.name}</p>
      {producto.price.previous.value !== null ? (
        <div className="contenedor-precio">
          <span className="precio-producto old-precio">
            {producto.price.previous.text}
          </span>
          <span className="precio-producto new-precio">
            {producto.price.current.text}
          </span>
        </div>
      ) : (
        <span className="precio-producto">{producto.price.current.text}</span>
      )}
    </Item>
  );
};

export default ItemProductos;
