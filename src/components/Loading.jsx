import React from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100vh")};

  background: #f5f5f5;
`;

const Loading = ({ maxHeight, maxWidth }) => {
  return <Contenedor height={maxHeight} width={maxWidth}></Contenedor>;
};

export default Loading;
