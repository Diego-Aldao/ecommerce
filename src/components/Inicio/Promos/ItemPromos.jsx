import React from "react";
import styled from "styled-components";
import ButtonLink from "../ButtonLink";
const ItemPromo = styled.div`
  width: 100%;
  text-align: center;
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

    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 2;
  }
  a:after {
    background: black;
    color: white;
    top: 61px;
    padding: 8px 0px 10px;
  }
`;

const ItemPromos = ({ data }) => {
  return (
    <ItemPromo>
      <img src={data.imagen} alt="" />
      <h2>{data.titulo}</h2>
      <p>{data.subtitulo}</p>
      <ButtonLink link={"/"}>comprar ahora</ButtonLink>
    </ItemPromo>
  );
};

export default ItemPromos;
