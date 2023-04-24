import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useDestino from "../../../../hooks/useDestino";

const Categoria = styled.li`
  text-align: start;
  padding: 7px 0px;
  cursor: pointer;
`;
const ItemCategoria = ({ producto, categoriaProducto, setIsVisible }) => {
  const { link, id, content } = producto;
  const { display } = categoriaProducto;
  const navigate = useNavigate();
  const [currentLink, setCurrentLink] = useState("");
  const { linkFormateado } = useDestino(currentLink);
  const handleNavigation = (link) => {
    setCurrentLink(link.webUrl);
  };

  useEffect(() => {
    if (!linkFormateado) return;
    setIsVisible(false);
    navigate(linkFormateado);
  }, [linkFormateado]);

  return (
    <Categoria
      onClick={() => {
        handleNavigation(link);
      }}
      key={id}
      className={
        display.webLargeTemplateName.length !== 0
          ? `li-${display.webLargeTemplateName}`
          : `li-${display.mobileDisplayLayout}`
      }
    >
      <div>
        <img src={content.webLargeImageUrl}></img>
      </div>
      <span>{content.title}</span>
    </Categoria>
  );
};

export default ItemCategoria;
