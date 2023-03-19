import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useDestino from "../../../hooks/useDestino";

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  position: absolute;
  left: ${({ position }) => (position ? "0px" : "100%")};
  transition: var(--transition);
  overflow: hidden;
  color: black;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  box-shadow: 1px 1px 50px 1px var(--color-gris-secundario);
`;
const BtnAtras = styled.button`
  width: 50px;
  height: 100%;
  svg {
    stroke-width: 0.6;
    width: 22px;
    height: 22px;
  }
`;

const Titulo = styled.h3`
  flex: 1 1 auto;
  height: auto;
  text-align: center;
  position: absolute;
  left: 0px;
  width: 100%;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
`;

const MiniCategoria = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 30px;
`;

const TituloInterior = styled.h4`
  width: 100%;
  padding: 25px;
  background: #eee;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.3;
  &.premium {
    background: black;
    padding: 15px;
    margin: 20px 0px;
    text-transform: uppercase;
    text-align: center;
    color: white;
  }
  &.noTitle {
    display: none;
  }
`;

const ListaItemsInterior = styled.ul`
  padding: 15px;
`;

const Item = styled.li`
  display: flex;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid #3d3d3d1a;
  position: relative;
  div {
    width: 40px;
    min-width: 40px;
    height: 40px;
    background: #3d3d3d1a;
    margin-right: 15px;
    border-radius: 50%;
    img {
      border-radius: 50%;
    }
  }
  &.especial-grande,
  &.especial-pequeño {
    margin-bottom: 10px;
    border: none;
    span {
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1.2;
    }
  }
  &.especial-pequeño {
    flex-direction: row-reverse;
    background: #3d3d3d1a;
    height: 80px;
    justify-content: space-between;
    padding: 12px;
    div {
      min-height: 62px;
      min-width: 62px;
      margin: 0;
      margin-left: 10px;
    }
  }
  &.especial-grande {
    height: 85px;
    span {
      padding: 10px;
      position: relative;
      z-index: 2;
      color: white;
      max-width: 70%;
    }
    div {
      position: absolute;
      width: 100%;
      height: 100%;
      filter: brightness(0.7);
      border-radius: 0px;
      img {
        border-radius: 0px;
        object-fit: cover;
      }
    }
  }
  &:last-child {
    border: none;
  }
`;

const DetalleCategorias = ({ currentNav, position, setPosition }) => {
  const navigate = useNavigate();
  const [currentLink, setCurrentLink] = useState("");
  const { linkFormateado } = useDestino(currentLink);

  const handleClick = () => {
    setPosition((prevValue) => !prevValue);
  };

  const handleNavigation = (item) => {
    setCurrentLink(item);
  };

  useEffect(() => {
    navigate(linkFormateado);
  }, [linkFormateado]);

  return (
    <Nav position={position}>
      <Header onClick={handleClick}>
        <BtnAtras>
          <BsArrowLeft></BsArrowLeft>
        </BtnAtras>
        <Titulo>{currentNav && currentNav.content.title}</Titulo>
      </Header>
      <MiniCategoria>
        {currentNav
          ? currentNav.children
              .filter((obj) => obj.channelExclusions.length !== 1)
              .map((obj) => {
                return (
                  <li key={obj.id}>
                    <TituloInterior className={obj.style.webLargeStyleType}>
                      {obj.content.title}
                    </TituloInterior>
                    <ListaItemsInterior>
                      {obj.children.map((item) => {
                        return (
                          <>
                            {item.style.webLargeStyleType === "premium" &&
                            item.channelExclusions < 1 ? (
                              <TituloInterior className="premium" key={item.id}>
                                {item.content.title}
                              </TituloInterior>
                            ) : (
                              <Item
                                key={item.id}
                                className={
                                  obj.style.webLargeStyleType == "noTitle" &&
                                  obj.style.mobileStyleType == "noTitle"
                                    ? "especial-grande"
                                    : obj.style.webLargeStyleType == "noTitle"
                                    ? "especial-pequeño"
                                    : ""
                                }
                                onClick={() =>
                                  handleNavigation(item.link.webUrl)
                                }
                              >
                                <div>
                                  <img
                                    src={item.content.mobileImageUrl}
                                    alt=""
                                  />
                                </div>
                                <span>{item.content.title}</span>
                              </Item>
                            )}
                          </>
                        );
                      })}
                    </ListaItemsInterior>
                  </li>
                );
              })
          : ""}
      </MiniCategoria>
    </Nav>
  );
};

export default DetalleCategorias;
