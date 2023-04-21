import React from "react";
import styled from "styled-components";
import ButtonLink from "../ButtonLink";
import { useNavigate } from "react-router-dom";
import useProductos from "../../../hooks/useProductos";

const ItemPromo = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  h2 {
    padding: 20px 0px 10px;
    text-transform: uppercase;
  }
  p {
    font-size: 18px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  a {
    background: white;
    color: black;
    margin: 25px auto 0px;
    width: 250px;
    padding: 14px 0px 10px;
    border: 2px solid black;
    height: 61px;
    position: relative;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 2;
    &:after {
      background: black;
      color: white;
      top: 61px;
      padding: 8px 0px 10px;
    }
  }
`;

const ItemPromos = ({ data }) => {
  const { getProductos } = useProductos();
  const navigate = useNavigate();

  const handleClick = () => {
    let categoria = data.link;
    getProductos({ categoria });
    navigate(date.link);
  };

  return (
    <ItemPromo onClick={handleClick}>
      <img src={data.imagen} alt={`promocion ${data.titulo}`} />
      <h2>{data.titulo}</h2>
      <p>{data.subtitulo}</p>
      <ButtonLink link={data.link}>comprar ahora</ButtonLink>
    </ItemPromo>
  );
};

export default ItemPromos;
