import React, { useState, useEffect } from "react";
import useCarrito from "../../hooks/useCarrito";
import styled from "styled-components";
import ItemCarrito from "./ItemCarrito";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import SinProductos from "../SinProductos";
import useGuardados from "../../hooks/useGuardados";

const Contenedor = styled.div`
  width: 100%;
`;

const ContenedorGrid = styled.section`
  background: var(--color-gris);
  position: relative;
  padding-bottom: 10px;
  header {
    padding: 25px;
    h3 {
      text-align: center;
      font-size: 24px;
    }
    h3:first-letter {
      text-transform: capitalize;
    }
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;
    padding: 0px 25px 25px;
    header {
      grid-column: 1 / 3;
    }
  }
`;

const Promo = styled.div`
  width: 100%;
  background: var(--color-promo);
  padding: 10px;
  grid-column: 1 / 3;
  margin-bottom: 25px;
  line-height: 1.7;
  span {
    text-transform: uppercase;
    font-weight: 700;
  }
  p {
    text-align: center;
    font-size: 12px;
  }
  p:first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 1024px) {
    padding: 15px;
    p {
      font-size: 14px;
    }
  }
`;

const ListaCarrito = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Pago = styled.div`
  width: 100%;
  top: 20px;
  position: sticky;
  max-height: 390px;
`;

const ConfirmarPago = styled.div`
  width: 100%;
  padding: 15px;
  background: #ffffff;
  margin-bottom: 5px;
  .subtotal,
  .envio {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 0px;
    p {
      text-transform: capitalize;
      font-weight: 700;
    }
    span {
      font-weight: 300;
      font-size: 18px;
    }
    .especial {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 14px;
      color: var(--color-promo2);
    }
  }
  .btn-pagar {
    width: 100%;
    padding: 12px 0px;
    background: black;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 16px;
    margin-top: 20px;
    span {
      color: var(--color-principal);
    }
  }
`;

const Envio = styled.div`
  width: 100%;
  background: var(--color-promo2);
  padding: 15px;
  display: flex;
  justify-content: center;
  margin: 20px 0px 5px;
  h3 {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 1px;
    span {
      display: block;
      margin-right: 10px;
    }
  }
  svg {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 1024px) {
    margin-top: 0px;
  }
`;

const MediosDePago = styled.div`
  width: 100%;
  padding: 15px;
  background: white;
  margin-bottom: 5px;
  h3 {
    text-transform: uppercase;
    font-size: 14px;
  }
  .contenedor-tarjetas {
    width: 100%;
    margin: 10px 0px;
    display: flex;
    .tarjeta {
      margin-right: 7px;
      height: 20px;
      width: 30px;
      background: red;
    }
  }
  p {
    line-height: 1.4;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    text-align: center;
    .contenedor-tarjetas {
      align-items: center;
      justify-content: center;
    }
  }
`;

const Carrito = () => {
  const { carrito } = useCarrito();
  const { guardados } = useGuardados();
  const [data, setData] = useState({});

  useEffect(() => {
    if (guardados.length >= 1 && carrito.length == 0) {
      setData({
        ...data,
        icono: <AiOutlineShopping />,
        titulo: "tu carrito esta vacío",
        carrito: true,
        descripcion:
          "pero debajo aparecen los articulos que tienes guardados, buscabas alguno de ellos?",
        boton: false,
      });
    } else if (guardados.length == 0 && carrito.length == 0) {
      setData({
        ...data,
        icono: <AiOutlineShopping />,
        titulo: "tu carrito esta vacío",
        carrito: true,
        descripcion: "no tienes articulos en el carrito ni guardados",
        boton: true,
      });
    }
  }, [carrito, guardados]);

  return (
    <Contenedor>
      {carrito.length >= 1 ? (
        <ContenedorGrid>
          <header>
            <h3>carrito</h3>
          </header>
          <Promo>
            <p>
              realiza una compra de 100 euros y obten el 15% de descuento en
              casi todo con el codigo <span>ahora15</span>. Algunos artículos
              pueden crear excluidos
            </p>
          </Promo>
          <ListaCarrito>
            {carrito.map((item) => {
              return <ItemCarrito item={item} />;
            })}
          </ListaCarrito>
          <Pago>
            <Envio>
              <h3>
                <span>
                  <MdOutlineLocalShipping />
                </span>
                envio estandar gratis
              </h3>
            </Envio>
            <MediosDePago>
              <h3>aceptamos: </h3>
              <div className="contenedor-tarjetas">
                <span className="tarjeta"></span>
                <span className="tarjeta"></span>
                <span className="tarjeta"></span>
                <span className="tarjeta"></span>
                <span className="tarjeta"></span>
              </div>
              <p>Tienes un codigo de descuento? Añadelo en el proximo paso</p>
            </MediosDePago>
            <ConfirmarPago>
              <div className="subtotal">
                <p>subtotal</p>
                <span>50,48 €</span>
              </div>
              <div className="envio">
                <p>envio</p>
                <span className="especial">gratis</span>
              </div>
              <button className="btn-pagar">
                <span>pagar ahora</span>
              </button>
            </ConfirmarPago>
          </Pago>
        </ContenedorGrid>
      ) : carrito.length == 0 && guardados.length >= 1 ? (
        <SinProductos data={data} />
      ) : (
        <SinProductos data={data} />
      )}
    </Contenedor>
  );
};

export default Carrito;
