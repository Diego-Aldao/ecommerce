import React from "react";
import { Link } from "react-router-dom";
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
  a {
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-mujer:after {
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
  overflow-y: scroll;
`;

const Categoria = styled.li`
  flex: 1 1 auto;
  height: 80px;
  background: url(${({ background }) => background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 20px;
  &.btn-inicio {
    height: 50px;
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

const Categorias = ({ setCurrentNav, categorias, position, setPosition }) => {
  const handleClick = (item) => {
    setCurrentNav(item);
    setPosition((prevValue) => !prevValue);
  };
  return (
    <Nav position={position}>
      <BotonesGenero>
        <button className="btn-mujer">
          <Link to="/mujer"> mujer</Link>
        </button>
        <button>
          <Link to="/hombre"> hombre</Link>
        </button>
      </BotonesGenero>
      <ListaCategorias>
        <Categoria className="btn-inicio"></Categoria>
        {categorias ? (
          categorias
            .filter((categoria) => categoria.channelExclusions.length !== 2)
            .map((item) => {
              return (
                <Categoria
                  key={item.id}
                  onClick={() => {
                    handleClick(item);
                  }}
                  background={item.content.mobileImageUrl}
                >
                  {item.content.subTitle ? (
                    <>
                      <Titulo className="especial">{item.content.title}</Titulo>
                      <Titulo className="subtitulo">
                        {item.content.subTitle}
                      </Titulo>
                    </>
                  ) : (
                    <Titulo>{item.content.title}</Titulo>
                  )}
                </Categoria>
              );
            })
        ) : (
          <>loading</>
        )}
      </ListaCategorias>
    </Nav>
  );
};

export default Categorias;
