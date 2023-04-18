import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import ContenedorWidth from "../../styles/ContenedorMaxWidth";
import Loading from "../Loading";
import ButtonLink from "./ButtonLink";

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
  const size = useWindowSize();

  return (
    <ContenedorWidth>
      <Contenedor>
        {data ? (
          <>
            <img
              src={size.width < 768 ? data.imagenMovile : data.imagenDesktop}
              alt="banner topshop"
            />
            <InfoHero>
              <Tienda>
                <span>{data.titulo}</span>
              </Tienda>
              <ButtonLink link={"/productos/mujer/novedades/categoryId=27108"}>
                comprar ahora
              </ButtonLink>
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
