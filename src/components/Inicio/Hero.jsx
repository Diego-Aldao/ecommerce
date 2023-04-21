import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContenedorWidth from "../../styles/ContenedorMaxWidth";
import Loading from "../Loading";
import ButtonLink from "./ButtonLink";
import useProductos from "../../hooks/useProductos";
import { useNavigate } from "react-router-dom";

const Contenedor = styled.div`
  width: 100%;
  margin: 20px 0px;
  position: relative;
  min-height: 346px;
  display: flex;
  align-items: center;
  @media (min-width: 580px) {
    min-height: 625px;
  }
  @media (min-width: 768px) {
    min-height: 488px;
  }
  @media (min-width: 1240px) {
    min-height: 591px;
  }
`;

const InfoHero = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin-top: 20px;
  }
`;

const Tienda = styled.div`
  padding: 14px 15px 10px;
  background: black;
  span {
    color: #fff;
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
  }
  @media (min-width: 1024px) {
    padding-top: 20px;
    span {
      font-size: 58px;
    }
  }
`;

const Hero = ({ data }) => {
  const [categoria, setCategoria] = useState();
  const { getProductos } = useProductos({ categoria });
  const navigate = useNavigate();

  const handleClick = () => {
    getProductos();
    navigate(`/productos${data.link}`);
  };

  useEffect(() => {
    if (!data) return;
    setCategoria(data.categoria);
  }, [data]);

  return (
    <ContenedorWidth>
      <Contenedor onClick={handleClick}>
        {data ? (
          <>
            <picture>
              <source srcset={data.imagenMovile} media="(max-width: 768px)" />
              <img
                class="hero__image"
                src={data.imagenDesktop}
                alt="Primavera_verano"
              />
            </picture>
            <InfoHero>
              <Tienda>
                <span>{data.titulo}</span>
              </Tienda>
              <ButtonLink link={data.link}>comprar ahora</ButtonLink>
            </InfoHero>
          </>
        ) : (
          <Loading />
        )}
      </Contenedor>
    </ContenedorWidth>
  );
};

export default Hero;
