import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  div {
    min-height: 510px;
    @media (min-width: 1024px) {
      min-height: 568px;
    }
    @media (min-width: 1240px) {
      min-height: 688px;
    }
  }
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

const Header = ({ data }) => {
  return (
    <StyledHeader>
      <div>
        <picture>
          <source srcSet={data.header.imagenMovil} media="(max-width: 768px)" />
          <img src={data.header.imagenDesk} alt="Topman. Primavera/ verano//" />
        </picture>
      </div>
      <StyledLink to={data.header.link1}>novedades</StyledLink>
      <StyledLink to={data.header.link2}>los mas deseados</StyledLink>
    </StyledHeader>
  );
};

export default Header;
