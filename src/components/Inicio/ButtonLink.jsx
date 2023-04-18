import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  padding: 14px 15px 10px;
  background: black;
  display: inline-block;
  color: white;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  height: 43px;
  &:after {
    content: ${(props) => (props.nombre ? `"${props.nombre}"` : "")};
    transition: all 0.1s ease-in-out;
    position: absolute;
    left: 0px;
    top: 43px;
    width: 100%;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
    color: black;
    background: white;
  }
  &:hover {
    background: white;
    padding-top: 0px;
  }
  &:hover::after {
    top: 0px;
  }
`;
const ButtonLink = ({ children, link }) => {
  return (
    <StyledLink nombre={children} to={link}>
      {children}
    </StyledLink>
  );
};

export default ButtonLink;
