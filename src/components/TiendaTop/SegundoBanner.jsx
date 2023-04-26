import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBanner = styled.section`
  display: flex;
  flex-direction: column;
  margin: 25px 0px;
`;
const StyledLink = styled(Link)`
  background: black;
  color: white;
  font-weight: 700;
  padding: 15px 0px;
  text-transform: uppercase;
  text-align: center;
  font-size: clamp(28px, 7vw, 58px);
  position: relative;
  top: -4px;
`;

const SegundoBanner = ({ data }) => {
  return (
    <StyledBanner>
      <picture>
        <source srcSet={data?.imagenMovil} media="(max-width: 768px)" />
        <img src={data?.imagenDesktop} alt="Primavera_verano" />
      </picture>
      <StyledLink to={data?.link}>{data?.nombre}</StyledLink>
    </StyledBanner>
  );
};

export default SegundoBanner;
