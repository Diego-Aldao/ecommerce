import React from "react";
import useGuardados from "../../hooks/useGuardados";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContenedorPreview = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 900px;
  margin: 0px auto;
  header {
    border-top: 1px solid var(--color-gris);
    padding: 20px 0px;
    h3 {
      text-transform: uppercase;
      font-size: 16px;
    }
  }
`;

const VerGuardados = styled(Link)`
  width: 100%;
  max-width: 350px;
  display: block;
  text-align: center;
  margin: 20px auto 0px;
  font-weight: 700;
  padding: 15px 15px 13px;
  border: 1px solid var(--color-gris);
  text-transform: uppercase;
  line-height: 1.4;
  font-size: 14px;
`;

const ContenedorGrid = styled.div`
  width: 100%;
  background: white;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
  }
`;

const ItemGuardado = styled.div`
  padding: 20px 0px;
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  background: white;
`;

const ImagenItem = styled.div`
  width: 110px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const InfoItem = styled.div`
  padding-left: 15px;
  width: calc(100% - 110px);
  .precio {
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
  }
  .nombre {
    height: 40px;
    overflow: hidden;
    margin: 10px 0px;
    color: #747474;
    line-height: 1.5;
    font-size: 14px;
  }
`;
const DataItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    font-size: 14px;
    padding-right: 10px;
    margin-right: 5px;
    position: relative;
    font-weight: 700;
  }
  p:nth-child(2) {
    text-transform: uppercase;
  }
  p:nth-child(3) {
    text-transform: capitalize;
  }
  p:not(:last-child):after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background: var(--color-gris);
    right: 0px;
    top: 0px;
  }
  button {
    text-transform: uppercase;
    margin-top: 10px;
    width: 100%;
    padding: 10px 5px;
    border: 2px solid var(--color-principal);
  }
`;

const PreviewGuardados = () => {
  const { guardados } = useGuardados();
  return (
    <ContenedorPreview>
      <header>
        <h3>estas buscando...?</h3>
      </header>
      <ContenedorGrid>
        {guardados.map((guardado) => {
          return (
            <ItemGuardado key={guardado.id}>
              <ImagenItem>
                <img
                  src={`https://${
                    guardado.media
                      ? guardado.media.images[0].url
                      : guardado.imageUrl
                  }`}
                  alt=""
                />
              </ImagenItem>
              <InfoItem>
                <span className="precio">{guardado.price.current.text}</span>
                <p className="nombre">{guardado.name}</p>
                <DataItem>
                  <p className="color">
                    {guardado.variants
                      ? guardado.variants[0].colour
                      : guardado.colour}
                  </p>
                  <p className="talla">
                    eu{" "}
                    {guardado.variants ? guardado.variants[0].brandSize : "s"}
                  </p>
                  <button>añadir a mi bolsa</button>
                </DataItem>
              </InfoItem>
            </ItemGuardado>
          );
        })}
      </ContenedorGrid>
      <VerGuardados to="/guardados">
        <span>ver todos mis articulos guardados</span>
      </VerGuardados>
    </ContenedorPreview>
  );
};

export default PreviewGuardados;
