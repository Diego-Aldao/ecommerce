import React from "react";
import styled from "styled-components";

const StyledLogo = styled.p`
  display: inline-block;
  letter-spacing: -4px;
  font-weight: 800;
  text-transform: uppercase;
`;

const Logo = () => {
  return <StyledLogo>akira</StyledLogo>;
};

export default Logo;
