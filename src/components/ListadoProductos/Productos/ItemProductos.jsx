import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useGuardados from "../../../hooks/useGuardados";
import useDetalleProducto from "../../../hooks/useDetalleProducto";
import { animated, useSpring } from "@react-spring/web";

const Item = styled.div`
  position: relative;
  cursor: pointer;
  border-bottom: 2px solid var(--color-principal);
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

const BtnFavorito = styled.span`
  right: 10px;
  bottom: 100px;
  background: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
  display: block;
  position: absolute;
  z-index: 2;
  svg {
    height: 100%;
    width: 100%;
  }
  svg {
    fill: var(--color-promo2);
  }
`;

const ImagenProducto = styled(animated.div)`
  position: relative;
  min-height: 190px;
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
  @media (min-height: 768px) {
    min-height: 300px;
  }
  @media (min-height: 1024px) {
    min-height: 360px;
  }
`;

const ItemProductos = ({ producto }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState();
  const { guardados, guardarProducto } = useGuardados();
  const { getDetalleProducto } = useDetalleProducto();
  const [currentImg, setCurrentImg] = useState(producto.imageUrl);
  const [spring, api] = useSpring(() => ({
    from: {
      opacity: 1,
    },
    config: { mass: 5, tension: 2000, friction: 100 },
  }));

  const handleClick = () => {
    let productoId = producto.id;
    /*     getDetalleProducto({ productoId }); */
    navigate(`/detalle/${producto.url}`);
  };

  useEffect(() => {
    let currentLiked = guardados?.some(
      (guardado) => guardado.id === producto.id
    );
    setLiked(currentLiked);
  }, [guardados]);

  const handleGuardarProducto = (producto) => {
    let imagen = producto.imageUrl
      ? producto.imageUrl
      : producto.media.images[0].url;
    let { id, name, price, colour } = producto;

    const dataProducto = {
      id: id,
      name: name,
      price: price,
      imagen: imagen,
      colour: colour,
    };
    guardarProducto(dataProducto);
  };

  const handleMouseOver = () => {
    setCurrentImg(
      producto.additionalImageUrls[0]
        ? producto.additionalImageUrls[0]
        : producto.imageUrl
    );
  };
  const handleMouseLeaves = () => {
    setCurrentImg(producto.imageUrl);
  };

  useEffect(() => {
    api.start({
      from: {
        opacity: 0.5,
      },
      to: {
        opacity: 1,
      },
    });
  }, [currentImg]);

  return (
    <Item>
      <BtnFavorito
        onClick={() => {
          handleGuardarProducto(producto);
        }}
      >
        {liked ? (
          <AiFillHeart className="corazon-lleno"></AiFillHeart>
        ) : (
          <AiOutlineHeart></AiOutlineHeart>
        )}
      </BtnFavorito>
      <ImagenProducto
        style={spring}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeaves}
      >
        {producto.isSellingFast && <span className="arrasando">arrasando</span>}
        <img src={`https://${currentImg}`} alt="" />
      </ImagenProducto>
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
