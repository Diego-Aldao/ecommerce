import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const Contenedor = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0px 15px;
  margin-bottom: 1px solid black;
  border-bottom: 1px solid var(--color-gris);
  ul {
    display: flex;
    height: 100%;
  }
  li {
    display: flex;
    align-items: center;
    p {
      font-size: clamp(12px, 2vw, 15px);
      text-transform: capitalize;
    }
  }
  li:last-child p {
    color: #7c7c7c;
  }
  span {
    padding: 0px 10px;
  }
  svg {
    width: 10px;
    height: 10px;
    color: #747474;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Navegacion = () => {
  let { genero, categoria1, categoria2 } = useParams();
  let currentCategoria = categoria2.replaceAll("-", " ");
  let primerCategoria = categoria1.replaceAll("-", " ");
  return (
    <Contenedor>
      <ul>
        <li>
          <p>inicio</p>
        </li>
        <li>
          <span>
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </span>
          <p>{genero}</p>
        </li>
        <li>
          <span>
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </span>
          <p>{primerCategoria}</p>
        </li>
        <li>
          <span>
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </span>
          <p>{currentCategoria}</p>
        </li>
      </ul>
    </Contenedor>
  );
};

export default Navegacion;
