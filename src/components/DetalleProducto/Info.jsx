import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { BsFiles } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";
import Descripcion from "./Descripcion";
import useGuardados from "../../hooks/useGuardados";
import Loading from "../Loading";
import useCarrito from "../../hooks/useCarrito";

const Contenido = styled.section`
  width: 100%;
  padding: 25px 10px;

  @media (min-width: 768px) {
    padding: 25px 0px;
  }
`;

const Header = styled.header`
  width: 100%;
  h3 {
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 15px;
  }
  span {
    font-weight: 500;
    font-size: 20px;
  }
`;

const Oferta = styled.div`
  display: flex;
  padding: 15px;
  background: var(--color-promo);
  margin: 25px 0px;
  svg {
    width: 25px;
    height: 25px;
  }
  div {
    margin-left: 15px;
  }
  p {
    margin-bottom: 7px;
    font-size: 14px;
    span {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
  p:first-child {
    text-transform: uppercase;
  }
  p:first-letter {
    text-transform: capitalize;
  }
`;

const Caracteristica = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  p {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    span {
      font-weight: 400;
      text-transform: capitalize;
      display: flex;
      margin-left: 5px;
      font-size: 14px;
    }
  }
`;

const Select = styled.select`
  width: 100%;
  height: 45px;
  padding-left: 5px;
  margin-top: 15px;
  text-transform: capitalize;
  font-size: 16px;
`;

const BotonesUsuario = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

const BtnAñadir = styled.button`
  width: calc(100% - 60px);
  height: 40px;
  background: var(--gradiente-principal);
  text-transform: uppercase;
  font-weight: 800;
  font-size: 16px;
  padding: 7px 0px 3px 0px;
  cursor: pointer;
`;

const BtnFavorito = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-gris);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  svg {
    height: 20px;
    width: 20px;
    stroke-width: 2.5;
  }
`;

const Envio = styled.div`
  width: 100%;
  border: 1px solid var(--color-gris);
  padding: 16px;
  margin-top: 20px;
  div {
    display: flex;
    padding: 5px 0px;
    align-items: center;
    span {
      padding-right: 10px;
      display: inline-block;
      width: 36px;
      height: 22px;
    }
    p::first-letter {
      text-transform: capitalize;
    }
    p {
      font-size: 14px;
    }
    svg {
      height: 22px;
      width: 22px;
    }
  }
  div:last-child {
    flex-direction: column;
    align-items: flex-start;
    p {
      padding-left: 36px;
    }
    p:last-child {
      margin-top: 10px;
      text-decoration: underline;
    }
    svg {
      height: 10px;
      width: 10px;
    }
  }
`;

const Info = ({ data }) => {
  const [liked, setLiked] = useState([]);
  const { guardados, guardarProducto } = useGuardados();
  const { carrito, añadirProductoCarrito } = useCarrito();
  const [productoEnCarrito, setProductoEnCarrito] = useState(false);

  useEffect(() => {
    const productoExiste = carrito.some((producto) => producto.id === data.id);
    setProductoEnCarrito(productoExiste);
  }, [data, carrito]);

  const formatearProducto = (producto, accion) => {
    let imagen = producto.imageUrl
      ? producto.imageUrl
      : producto.media.images[0].url;
    let color = producto.colour ? producto.colour : producto.variants[0].colour;

    let { id, name, price } = producto;

    const dataProducto = {
      id: id,
      name: name,
      price: price,
      imagen: imagen,
      colour: color,
    };
    if (accion == "guardar") {
      guardarProducto(dataProducto);
    } else if (accion == "carrito") {
      añadirProductoCarrito(dataProducto);
    }
  };

  useEffect(() => {
    let currentLiked = guardados?.some((guardado) => guardado.id === data?.id);
    setLiked(currentLiked);
  }, [guardados]);
  return (
    <Contenido>
      <Header>
        <h3>{data.name}</h3>
        <span>{data.price.current.text}</span>
      </Header>
      <Oferta>
        <span>
          <AiOutlineTag></AiOutlineTag>
        </span>
        <div>
          <p>¿acabas de llegar?</p>
          <p>¡consigue un -15% en todo!</p>
          <p>
            con el código: <span>akiranew</span>
          </p>
        </div>
      </Oferta>
      <Caracteristica>
        {data.desdeProductos ? (
          <>
            <p>color:</p>
            <Loading maxHeight={"25px"} maxWidth={"100px"} />
          </>
        ) : (
          <>
            <p>
              color:
              <span>{data?.variants[0]?.colour}</span>
            </p>
          </>
        )}
      </Caracteristica>
      <Caracteristica>
        <p>
          talla:
          <span>
            selecciona tu talla <RiArrowDropDownLine></RiArrowDropDownLine>
          </span>
        </p>
        {data.desdeProductos ? (
          <Loading maxHeight={"35px"} />
        ) : (
          <Select name="talle" id="talle" aria-label="Selecciona">
            <option value>seleccionar:</option>
            {data?.variants?.map((variant) => {
              return (
                <option value={variant.displaySizeText} key={variant.id}>
                  {variant.displaySizeText}
                </option>
              );
            })}
          </Select>
        )}
      </Caracteristica>
      <BotonesUsuario>
        <BtnAñadir
          onClick={() => {
            formatearProducto(data, "carrito");
          }}
        >
          {productoEnCarrito ? "quitar del carrito" : "añadir al carrito"}
        </BtnAñadir>
        <BtnFavorito
          onClick={() => {
            formatearProducto(data, "guardar");
          }}
        >
          {liked ? (
            <AiFillHeart></AiFillHeart>
          ) : (
            <AiOutlineHeart></AiOutlineHeart>
          )}
        </BtnFavorito>
      </BotonesUsuario>
      <Envio>
        <div>
          <span>
            <MdOutlineLocalShipping></MdOutlineLocalShipping>
          </span>
          <p>envio gratis</p>
        </div>
        <div>
          <span>
            <TbTruckReturn></TbTruckReturn>
          </span>
          <p>devoluciones gratis</p>
        </div>
        <div>
          <p>se aplican terminos y condiciones</p>
          <p>
            mas informacion sobre el envio<BsFiles></BsFiles>
          </p>
        </div>
      </Envio>
      <Descripcion data={data} />
    </Contenido>
  );
};

export default Info;
