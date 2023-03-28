import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiSearch, FiUser, FiShoppingBag, FiHeart } from "react-icons/fi";
import NavMovil from "./NavMovil/NavMovil";
import NavDesktop from "./NavDesktop/NavDesktop";
import { Link, useLocation } from "react-router-dom";
import BusquedaDesktop from "./Busqueda/BusquedaDesktop";

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
  svg {
    stroke-width: 3;
    width: 22px;
    height: 22px;
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

const NavPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const location = useLocation();

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
          <FiSearch />
        </IconoNav>
        <IconoNav>
          <FiUser />
        </IconoNav>
        <IconoNav>
          <FiHeart />
        </IconoNav>
        <IconoNav>
          <FiShoppingBag />
        </IconoNav>
        <NavMovil isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      </Nav>
      <NavDesktop data={data} />
    </>
  );
};

export default NavPrincipal;
