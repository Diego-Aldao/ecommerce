import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import ContenedorWidth from "../../styles/ContenedorMaxWidth";

const Contenedor = styled.div`
  width: 100%;
  margin: 20px 0px;
  position: relative;
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

const Hero = ({ data }) => {
  const size = useWindowSize();

  return (
    <ContenedorWidth className="no-padding">
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
              <BtnComprar>
                ,<button>comprar ahora</button>
              </BtnComprar>
            </InfoHero>
          </>
        ) : (
          <>loading</>
        )}
      </Contenedor>
    </ContenedorWidth>
  );
};

export default Hero;
