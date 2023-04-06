import React, { useState, useEffect } from "react";
import useCarrito from "../../hooks/useCarrito";
import styled from "styled-components";
import ItemCarrito from "./ItemCarrito";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineShopping, AiOutlineInfoCircle } from "react-icons/ai";
import SinProductos from "../SinProductos";
import useGuardados from "../../hooks/useGuardados";
import ContenedorMaxWidth from "../../styles/ContenedorMaxWidth";

const Contenedor = styled.div`
  width: 100%;
  background: var(--color-gris);
`;

const ContenedorWidthExtended = styled(ContenedorMaxWidth)`
  margin: 0px auto;
  padding: 20px 15px;
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
  @media (min-width: 1440px) {
    min-height: calc(100vh - 493px);
  }
`;

const Promo = styled.div`
  width: 100%;
  background: var(--color-promo);
  padding: 15px;
  grid-column: 1 / 3;
  line-height: 1.7;
  display: flex;
  align-items: center;
  justify-content: center;
  .icono {
    padding: 5px 10px 0px 0px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  p {
    text-align: center;
    font-size: 12px;
    span {
      text-transform: uppercase;
      font-weight: 700;
    }
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

const HeaderCarrito = styled.li`
  width: 100%;
  padding: 20px;
  background: white;
  margin-bottom: 5px;
  h3 {
    text-transform: capitalize;
  }
`;

const Pago = styled.div`
  width: 100%;
  top: 20px;
  position: sticky;
  max-height: 475px;
`;

const ConfirmarPago = styled.div`
  width: 100%;
  padding: 17.5px 15px;
  background: #ffffff;
  .total {
    text-transform: uppercase;
    padding: 15px 0px;
    border-bottom: 1px solid var(--color-gris);
    margin-bottom: 10px;
  }
  .subtotal,
  .envio {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  .envio {
    margin-bottom: 10px;
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
  background: white;
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
  margin-top: 30px;
  border-top: 1px solid var(--color-gris);
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
          "pero debajo aparecen los articulos que tienes guardados, ¡así puedes agregarlos a tu carrito cuando quieras!",
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
        <>
          <Promo>
            <span className="icono">
              <AiOutlineInfoCircle />
            </span>
            <p>
              realiza una compra de 100 euros y obten el 15% de descuento en
              casi todo con el codigo <span>ahora15</span>. Algunos artículos
              pueden crear excluidos
            </p>
          </Promo>
          <ContenedorWidthExtended>
            <ContenedorGrid>
              <ListaCarrito>
                <HeaderCarrito>
                  <h3>mi carrito</h3>
                </HeaderCarrito>
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
                <ConfirmarPago>
                  <div className="total">
                    <h3>total</h3>
                  </div>
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
                  <MediosDePago>
                    <h3>aceptamos: </h3>
                    <div className="contenedor-tarjetas">
                      <span className="tarjeta"></span>
                      <span className="tarjeta"></span>
                      <span className="tarjeta"></span>
                      <span className="tarjeta"></span>
                      <span className="tarjeta"></span>
                    </div>
                    <p>
                      Tienes un codigo de descuento? Añadelo en el proximo paso
                    </p>
                  </MediosDePago>
                </ConfirmarPago>
              </Pago>
            </ContenedorGrid>
          </ContenedorWidthExtended>
        </>
      ) : carrito.length == 0 && guardados.length >= 1 ? (
        <>
          <SinProductos data={data} />
        </>
      ) : (
        <SinProductos data={data} clase={"vacio-completo"} />
      )}
    </Contenedor>
  );
};

export default Carrito;
