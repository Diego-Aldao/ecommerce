import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Detalle = styled.ul`
  width: 100%;
  h3 {
    font-size: 14px;
    text-transform: capitalize;
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px 5px;
    span {
      position: absolute;
      background: #494949;
      width: 18px;
      height: 2px;
      right: 10px;
      transition: var(--transition);
    }
    span:last-child {
      transform: rotate(90deg);
    }
    &.visible {
      box-shadow: 0 4px 2px -2px var(--color-gris);
      span:last-child {
        transform: rotate(0deg);
      }
    }
  }
  .item-detalle {
    border-bottom: 1px solid var(--color-gris);
  }
  div {
    height: 0;
    visibility: hidden;
    line-height: 1.6;
    &.visible {
      height: auto;
      visibility: visible;
      padding: 20px 5px;
      a {
        text-decoration: underline;
      }
      ul {
        list-style-type: disc;
        padding-left: 20px;
        margin-top: 10px;
      }
      li {
        padding: 10px 0px;
        line-height: 1.1;
      }
    }
  }
`;

const Descripcion = ({ data }) => {
  let ref = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let ref5 = useRef();

  const handleClick = (e, ref) => {
    ref.current.classList.toggle("visible");
    e.target.classList.toggle("visible");
  };

  useEffect(() => {
    ref.current.innerHTML = data?.description;
    ref2.current.innerHTML = data?.brand.description;
    ref3.current.innerHTML = data?.info.sizeAndFit;
    ref4.current.innerHTML = data?.info.careInfo;
    ref5.current.innerHTML = data?.info.aboutMe;
  }, []);
  return (
    <Detalle>
      <li className="item-detalle">
        <h3
          onClick={(e) => {
            handleClick(e, ref);
          }}
        >
          detalles del producto
          <span></span>
          <span></span>
        </h3>
        <div ref={ref}></div>
      </li>
      <li className="item-detalle">
        <h3
          onClick={(e) => {
            handleClick(e, ref2);
          }}
        >
          marca
          <span></span>
          <span></span>
        </h3>
        <div ref={ref2}></div>
      </li>
      <li className="item-detalle">
        <h3
          onClick={(e) => {
            handleClick(e, ref3);
          }}
        >
          talla y corte
          <span></span>
          <span></span>
        </h3>
        <div ref={ref3}></div>
      </li>
      <li className="item-detalle">
        <h3
          onClick={(e) => {
            handleClick(e, ref4);
          }}
        >
          como cuidarme
          <span></span>
          <span></span>
        </h3>
        <div ref={ref4}></div>
      </li>
      <li className="item-detalle">
        <h3
          onClick={(e) => {
            handleClick(e, ref5);
          }}
        >
          como soy
          <span></span>
          <span></span>
        </h3>
        <div ref={ref5}></div>
      </li>
    </Detalle>
  );
};

export default Descripcion;
