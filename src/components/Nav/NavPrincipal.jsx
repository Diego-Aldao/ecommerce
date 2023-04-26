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
import useWindowSize from "../../hooks/useWindowSize";
import BusquedaMovil from "./Busqueda/BusquedaMovil";
import useNavegacion from "../../hooks/useNavegacion";
import Logo from "../Logo";

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  padding-inline: 15px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  @media (min-width: 768px) {
    height: 60px;
    padding-inline: 24px;
    .icono-busqueda {
      display: none;
    }
  }
  @media (min-width: 992px) {
    padding-inline: 32px;
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

const LogoNav = styled(Link)`
  margin-right: auto;
  padding: 8px 10px 0px;
  p {
    font-size: 1.7rem;
    color: white;
  }
  @media (min-width: 480px) {
    padding-inline: 20px;
    p {
      font-size: 2rem;
    }
  }
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
      genero == "/hombre" ? "none" : "var(--color-principal)"};
    color: ${({ genero }) => (genero == "/hombre" ? "#fff" : "#000")};
  }
  &.btn-hombre {
    background: ${({ genero }) =>
      genero == "/hombre" ? "var(--color-principal)" : "none"};
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
  const { navegacion, loading } = useNavegacion();
  const location = useLocation();
  const { guardados } = useGuardados();
  const { carrito } = useCarrito();
  const size = useWindowSize();
  const [busquedaVisible, setBusquedaVisible] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (size.width > 1024) {
      setIsOpen(false);
    }
  }, [size]);

  const handleBusqueda = () => {
    setBusquedaVisible((busquedaVisible) => !busquedaVisible);
  };

  return (
    <>
      <Nav>
        <BtnNavMovil onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </BtnNavMovil>
        <LogoNav to="/">
          <Logo />
        </LogoNav>
        <BotonGenero genero={location.pathname} className="btn-mujer">
          <Link to="/mujer">mujer</Link>
        </BotonGenero>
        <BotonGenero genero={location.pathname} className="btn-hombre">
          <Link to="/hombre">hombre</Link>
        </BotonGenero>
        <BusquedaDesktop />
        <BusquedaMovil isVisible={busquedaVisible} />
        <IconoNav className="icono-busqueda" onClick={handleBusqueda}>
          {busquedaVisible ? (
            <AiOutlineSearch className="lleno" />
          ) : (
            <AiOutlineSearch />
          )}
        </IconoNav>
        <IconoNav>
          <Link to="/login">
            <AiOutlineUser />
          </Link>
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
        {size.width < 1024 && (
          <NavMovil
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            navegacion={navegacion}
            loading={loading}
          />
        )}
      </Nav>
      <NavDesktop navegacion={navegacion} loading={loading} />
    </>
  );
};

export default NavPrincipal;
