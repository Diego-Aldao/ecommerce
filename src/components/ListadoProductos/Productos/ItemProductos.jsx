import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useGuardados from "../../../hooks/useGuardados";
import { animated, useSpring } from "@react-spring/web";

const Item = styled.div`
  position: relative;
  cursor: pointer;
  border-bottom: 2px solid var(--color-principal);
  .nombre-producto {
    font-size: 14px;
    margin-block: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
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
  min-height: 370px;
  border-radius: 5px;
  overflow: hidden;
  .arrasando {
    display: block;
    position: absolute;
    right: 0px;
    bottom: 28%;
    background: black;
    color: white;
    padding: 5px;
    border-radius: 20px 0px 0px 20px;
  }
  @media (min-width: 440px) {
    min-height: 256px;
  }
  @media (min-width: 768px) {
    min-height: 295px;
  }
  @media (min-width: 1024px) {
    min-height: 286px;
  }
  @media (min-width: 1240px) {
    min-height: 279px;
  }
  @media (min-width: 1440px) {
    min-height: 294px;
  }
`;

const ItemProductos = ({ producto }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState();
  const { guardados, guardarProducto } = useGuardados();
  const [currentImg, setCurrentImg] = useState(producto.imageUrl);
  const [spring, api] = useSpring(() => ({
    from: {
      opacity: 1,
    },
    config: { mass: 5, tension: 2000, friction: 100 },
  }));

  const handleClick = () => {
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
