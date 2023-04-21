import React, { useEffect } from "react";
import styled from "styled-components";
import ContenedorWidth from "../../styles/ContenedorMaxWidth";
import Loading from "../Loading";
import ButtonLink from "./ButtonLink";
import useProductos from "../../hooks/useProductos";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";

const Contenedor = styled.div`
  width: 100%;
  margin: 20px 0px;
  position: relative;
  max-height: 900px;
  picture {
    width: 100%;
  }
  display: flex;
  @media (min-width: 650px) {
    max-height: 645px;
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

const ImagenHero = styled(animated.div)`
  width: 100%;
  position: relative;
  height: 100%;
`;

const Hero = ({ data }) => {
  const { getProductos } = useProductos();
  const navigate = useNavigate();

  const [spring, api] = useSpring(() => ({
    from: {
      left: 10,
      top: 10,
      opacity: 0.5,
    },
    config: { mass: 5, tension: 2000, friction: 100 },
  }));

  const handleClick = () => {
    let categoria = data.categoria;
    getProductos({ categoria });
    navigate(data.link);
  };

  useEffect(() => {
    api.start({
      from: {
        left: 10,
        top: 10,
        opacity: 0.5,
      },
      to: {
        left: 0,
        top: 0,
        opacity: 1,
      },
    });
  }, [data]);

  return (
    <ContenedorWidth>
      <Contenedor onClick={handleClick}>
        {data ? (
          <ImagenHero style={spring}>
            <picture>
              <source srcSet={data.imagenMovile} media="(max-width: 650px)" />
              <img src={data.imagenDesktop} alt="Primavera_verano" />
            </picture>
            <InfoHero>
              <Tienda>
                <span>{data.titulo}</span>
              </Tienda>
              <ButtonLink link={data.link}>comprar ahora</ButtonLink>
            </InfoHero>
          </ImagenHero>
        ) : (
          <Loading />
        )}
      </Contenedor>
    </ContenedorWidth>
  );
};

export default Hero;
