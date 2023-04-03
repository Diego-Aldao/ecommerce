import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineSearch,
  AiTwotoneShopping,
} from "react-icons/ai";
import NavMovil from "./NavMovil/NavMovil";
import NavDesktop from "./NavDesktop/NavDesktop";
import { Link, useLocation } from "react-router-dom";
import BusquedaDesktop from "./Busqueda/BusquedaDesktop";
import useGuardados from "../../hooks/useGuardados";
import useCarrito from "../../hooks/useCarrito";

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0px 15px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 768px) {
    height: 60px;
    padding: 0px 32px;
    .icono-busqueda {
      display: none;
    }
  }
`;

const BtnNavMovil = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    width: 20px;
    height: 2px;
    background: white;
    margin: 2px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const LogoNav = styled.p`
  padding: 0px 20px;
  font-size: 2rem;
  margin-right: auto;
  color: white;
  @media (min-width: 1024px) {
    padding-left: 0px;
  }
`;
const IconoNav = styled.button`
  height: 100%;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    stroke-width: 30;
    width: 23px;
    height: 23px;
  }
  .lleno {
    fill: var(--color-principal);
    stroke: var(--color-principal);
  }
  @media (min-width: 768px) {
    padding: 15px;
  }
`;

const BotonGenero = styled.button`
  width: 115px;
  height: 100%;
  display: none;
  color: white;
  font-weight: 700;

  a {
    text-transform: uppercase;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.btn-mujer {
    background: ${({ genero }) =>
      genero == "/hombre" ? "none" : "var(--color-secundario)"};
    color: ${({ genero }) => (genero == "/hombre" ? "#fff" : "#000")};
  }
  &.btn-hombre {
    background: ${({ genero }) =>
      genero == "/hombre" ? "var(--color-secundario)" : "none"};
    color: ${({ genero }) => (genero == "/hombre" ? "#000" : "#fff")};
  }
`;

const Cantidad = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  color: white;
  font-weight: 800;
  font-size: 18px;
  top: 2px;
  right: 2px;
  @media (min-width: 768px) {
    top: 7px;
    right: 7px;
  }
`;

const NavPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const location = useLocation();
  const { guardados } = useGuardados();
  const { carrito } = useCarrito();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleData = (data) => {
    setData(data);
    localStorage.setItem("data", JSON.stringify(data));
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  const fetchData = () => {
    fetch(
      "https://asos2.p.rapidapi.com/categories/list?country=ES&lang=es-ES",
      options
    )
      .then((response) => response.json())
      .then((dataFetch) => handleData(dataFetch.navigation))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setData(JSON.parse(localStorage.getItem("data")));
    } else {
      fetchData();
    }
  }, []);

  return (
    <>
      <Nav>
        <BtnNavMovil onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </BtnNavMovil>
        <LogoNav>asos</LogoNav>
        <BotonGenero genero={location.pathname} className="btn-mujer">
          <Link to="/mujer">mujer</Link>
        </BotonGenero>
        <BotonGenero genero={location.pathname} className="btn-hombre">
          <Link to="/hombre">hombre</Link>
        </BotonGenero>
        <BusquedaDesktop />
        <IconoNav className="icono-busqueda">
          <AiOutlineSearch />
        </IconoNav>
        <IconoNav>
          <AiOutlineUser />
        </IconoNav>
        {guardados.length >= 1 ? (
          <IconoNav>
            <Cantidad>{guardados.length}</Cantidad>
            <Link to="/guardados">
              <AiFillHeart className="lleno" />
            </Link>
          </IconoNav>
        ) : (
          <IconoNav>
            <Link to="/guardados">
              <AiOutlineHeart />
            </Link>
          </IconoNav>
        )}
        {carrito.length >= 1 ? (
          <IconoNav>
            <Cantidad>{carrito.length}</Cantidad>
            <Link to="/carrito">
              <AiTwotoneShopping className="lleno" />
            </Link>
          </IconoNav>
        ) : (
          <IconoNav>
            <Link to="/carrito">
              <AiOutlineShopping />
            </Link>
          </IconoNav>
        )}
        <NavMovil isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      </Nav>
      <NavDesktop data={data} />
    </>
  );
};

export default NavPrincipal;
