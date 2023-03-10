import React from "react";
import styled from "styled-components";

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
  button {
    margin: 25px auto 0px;
    width: 250px;
    padding: 15px 0px 10px;
    border: 2px solid black;
    span {
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 600;
      line-height: 2;
    }
  }
`;

const ItemPromos = ({ data }) => {
  return (
    <ItemPromo>
      <img src={data.imagen} alt="" />
      <h2>{data.titulo}</h2>
      <p>{data.subtitulo}</p>
      <button>
        <span>comprar ahora</span>
      </button>
    </ItemPromo>
  );
};

export default ItemPromos;
