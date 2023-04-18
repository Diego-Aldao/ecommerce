import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

const animacion = keyframes`
to{transform: rotate(360deg);}
`;

const Contenedor = styled.div`
  width: 100%;
  height: 100%;
  background: #aeaeae;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animacion} 1s linear infinite;
  svg {
    width: 50px;
    height: 50px;
  }
`;

const Loading = () => {
  return (
    <Contenedor>
      <AiOutlineLoading></AiOutlineLoading>
    </Contenedor>
  );
};

export default Loading;
