import React from "react";
import styled from "styled-components";
import imgHeroMovil from "../../assets/Home/Hero/topshop_ww-hp-hero_mobile.webp";
import imgHeroDesk from "../../assets/Home/Hero/topshop_ww-hp-hero_desktop.avif";
import useWindowSize from "../../hooks/useWindowSize";
import ContenedorWidth from "../../styles/ContenedorMaxWidth";

const Contenedor = styled.div`
  width: 100%;
  margin: 20px 0px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
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
`;

const Tienda = styled.div`
  padding: 14px 15px 10px;
  background: black;
  color: white;
  span {
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

const BtnComprar = styled.div`
  padding: 14px 15px 10px;
  background: black;
  margin-top: 20px;
  button {
    color: white;
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
  }
`;

const Hero = () => {
  const size = useWindowSize();

  return (
    <ContenedorWidth className="no-padding">
      <Contenedor>
        <img src={size.width < 768 ? imgHeroMovil : imgHeroDesk} alt="" />
        <InfoHero>
          <Tienda>
            <span>topshop</span>
          </Tienda>
          <BtnComprar>
            ,<button>comprar ahora</button>
          </BtnComprar>
        </InfoHero>
      </Contenedor>
    </ContenedorWidth>
  );
};

export default Hero;
