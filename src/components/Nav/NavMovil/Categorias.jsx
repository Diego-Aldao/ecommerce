import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  position: relative;
  left: ${({ position }) => (position ? "-100%" : "0px")};
  transition: var(--transition);
  overflow: hidden;
  color: black;
  padding-bottom: 50px;
`;

const BotonesGenero = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  border-bottom: 1px solid var(--color-gris-secundario);
  box-shadow: 1px 1px 50px 1px var(--color-gris-secundario);
  button {
    flex: 1 1 auto;
    position: relative;
  }
  span {
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:first-child:after {
    content: "";
    width: 1px;
    height: 50%;
    background: var(--color-gris-secundario);
    position: absolute;
    top: 25%;
    right: 0px;
  }
`;

const ListaCategorias = styled.ul`
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow-y: scroll;
`;

const Categoria = styled.li`
  height: 80px;
  background: url(${({ background }) => background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 20px 0px;
  position: relative;
  &.btn-inicio {
    height: 50px;
    img {
      position: absolute;
    }
    span {
      position: relative;
    }
  }
  @media (min-width: 400px) {
    height: 96px;
  }
`;

const Titulo = styled.span`
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  &.especial,
  &.subtitulo {
    height: 50%;
  }
  &.especial {
    font-weight: 800;
  }
  &.subtitulo {
    font-weight: 400;
    letter-spacing: 0;
  }
`;

const Categorias = ({
  setCurrentNav,
  categorias,
  position,
  setPosition,
  inicio,
  setIsOpen,
}) => {
  const navigate = useNavigate();
  const [link, setLink] = useState();
  const handleClick = (item) => {
    setCurrentNav(item);
    setPosition((prevValue) => !prevValue);
  };

  const handleNavigation = (url) => {
    let urlFormateada = url.replaceAll("https://www.asos.com/es/", "/");
    setLink(urlFormateada);
    setIsOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    navigate(link);
  }, [link]);

  return (
    <Nav position={position}>
      <BotonesGenero>
        <button
          onClick={() => {
            handleNavigation("/mujer");
          }}
        >
          <span>mujer</span>
        </button>
        <button
          onClick={() => {
            handleNavigation("/hombre");
          }}
        >
          <span>hombre</span>
        </button>
      </BotonesGenero>
      <ListaCategorias>
        <Categoria
          className="btn-inicio"
          onClick={() => {
            handleNavigation(inicio.link.webUrl);
          }}
        >
          <img src={inicio?.content.mobileImageUrl} alt="" />
          <Titulo>{inicio?.content.title}</Titulo>
        </Categoria>
        {categorias?.map((categoria) => {
          return (
            !categoria.channelExclusions.includes("webSmall") && (
              <Categoria
                key={categoria.id}
                onClick={() => {
                  handleClick(categoria);
                }}
                background={categoria.content.mobileImageUrl}
              >
                {categoria.style.mobileStyleType !== "noTitle" &&
                  (categoria.content.subTitle ? (
                    <>
                      <Titulo className="especial">
                        {categoria.content.title}
                      </Titulo>
                      <Titulo className="subtitulo">
                        {categoria.content.subTitle}
                      </Titulo>
                    </>
                  ) : (
                    <Titulo>{categoria.content.title}</Titulo>
                  ))}
              </Categoria>
            )
          );
        })}
      </ListaCategorias>
    </Nav>
  );
};

export default Categorias;
