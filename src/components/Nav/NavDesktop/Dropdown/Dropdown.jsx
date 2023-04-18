import React from "react";
import styled from "styled-components";
import ItemCategoria from "./ItemCategoria";

const Contenedor = styled.div`
  width: 100%;
  background: var(--color-gris);
  position: absolute;
  height: ${({ isVisible }) => (isVisible ? "auto" : "0px")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
  z-index: 9;
  top: 50px;
  left: 0px;
  padding: 0px;
`;

const ListaFiltros = styled.ul`
  display: flex;
  background: #eee;
  height: 100%;
  overflow: hidden;
  padding: 24px 10px;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  .noTitle {
    display: none;
  }
`;

const FiltroCategorias = styled.li`
  flex: ${({ flex }) => (flex ? flex : 1)};
  padding: 0px 20px;
  border-right: 1px solid #00000022;
  h4 {
    text-align: start;
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    span {
      border-bottom: 2px solid black;
      line-height: 2;
    }
  }
  &:last-child {
    border: none;
  }
`;

const ListaItems = styled.ul`
  color: #666;
  font-size: 14px;
  column-count: ${({ column }) => column && column};
  li:hover {
    span {
      color: var(--color-promo2);
    }
    div {
      border-color: var(--color-promo2);
    }
  }

  .li-textList,
  .li-list {
    div {
      display: none;
    }
  }
  &.textList {
    li {
      text-align: start;
      padding: 10px 0px;
    }
  }

  &.gridCircleImageLarge {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 10px;
    div {
      border-radius: 50%;
      width: 78px;
      height: 78px;
      border: 1px solid #cccccc;
      img {
        border-radius: 50%;
      }
    }
    span {
      text-align: center;
      margin: 10px 0px;
    }
    li {
      display: flex;
      flex-direction: column;
      max-height: 164px;
      width: 50%;
      justify-content: center;
      align-items: center;
      padding: 0px 5px 20px;
    }
  }

  &.circleImageListLarge {
    li {
      display: flex;
      align-items: center;
      padding: 5px 0px;
    }
    div {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #c4c4c4;
    }
    span {
      height: 52px;
      width: 117px;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
    }
  }

  &.thirdMarketingImage,
  &.carousel {
    li {
      padding: 0px;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    div {
      height: 97px;
      width: 248px;
      border: 1px solid #cccccc;
    }
    span {
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 100%;
      display: flex;
      align-items: center;
      max-width: 58%;
      padding-left: 10px;
    }
  }
  &.thirdMarketingImage,
  &.fullMarketingImage,
  &.halfMarketingImage,
  &.carousel {
    li {
      position: relative;
    }
    span {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      color: #2d2d2d;
      letter-spacing: 1px;
      line-height: 1.2;
    }
  }

  &.fullMarketingImage,
  &.halfMarketingImage {
    div {
      position: relative;
      width: 240px;
    }
    div:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      background: linear-gradient(#20202014, #ffffff97);
    }
    span {
      position: absolute;
      bottom: 10px;
      left: 0px;
      width: 100%;
      max-width: 240px;
      text-align: center;
    }
  }

  &.fullMarketingImage {
    column-count: ${({ column }) => column && column};
    div {
      min-height: 270px;
      width: 240px;
      height: 270px;
    }
  }
  &.halfMarketingImage {
    div {
      min-height: 125px;
      border: 1px solid #dfdfdf;
    }
  }
`;

const Dropdown = ({ isVisible, currentContent }) => {
  return (
    <Contenedor isVisible={isVisible}>
      <ListaFiltros visible={isVisible}>
        {currentContent?.map((tipo) => {
          /*retornar las agrupaciones de productos */
          return (
            !tipo.channelExclusions.includes("webLarge") && (
              <FiltroCategorias
                key={tipo.id}
                flex={tipo.display.webLargeColumnSpan}
              >
                <h4 className={tipo.style.webLargeStyleType}>
                  <span>{tipo.content.title}</span>
                </h4>
                <ListaItems
                  className={
                    tipo.display.webLargeTemplateName.length !== 0
                      ? tipo.display.webLargeTemplateName
                      : tipo.display.mobileDisplayLayout
                  }
                  column={tipo.display.webLargeColumnSpan}
                >
                  {tipo.children.map((producto) => {
                    /*retornar los productos */
                    return (
                      <React.Fragment key={producto.id}>
                        <ItemCategoria
                          producto={producto}
                          categoriaProducto={tipo}
                        />
                      </React.Fragment>
                    );
                  })}
                </ListaItems>
              </FiltroCategorias>
            )
          );
        })}
      </ListaFiltros>
    </Contenedor>
  );
};

export default Dropdown;
