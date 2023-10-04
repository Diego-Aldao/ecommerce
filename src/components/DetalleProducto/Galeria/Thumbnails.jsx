import React from "react";
import styled from "styled-components";
import { BsImages, BsPlay } from "react-icons/bs";
import Loader from "../../Loader";

const StyledThumbnails = styled.div`
  display: none;
  width: 80px;
  padding-inline: 10px;
  min-height: 250px;
  div {
    height: 83px !important;
    border-radius: 5px;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const BotonMedia = styled.button`
  width: 100%;
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  background: var(--color-gris);
  font-weight: 600;
  @media (min-width: 768px) {
    display: none;
    &.media-thumbnail {
      background: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin: 10px 5px;
      svg {
        height: 25px;
        width: 25px;
      }
      p {
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }
`;

const Thumbnails = ({
  imagenes,
  detalleProducto,
  handleContent,
  handleClick,
  currentContent,
}) => {
  return (
    <StyledThumbnails>
      {detalleProducto.desdeProductos ? (
        <Loader height={"450px"} width={"100%"} />
      ) : (
        <>
          {imagenes?.map((imagen, index) => {
            return (
              <div
                key={imagen.original}
                onClick={() => {
                  handleClick(index);
                }}
              >
                <img src={imagen.original} alt="" />
              </div>
            );
          })}
          <BotonMedia onClick={handleContent} className="media-thumbnail">
            {detalleProducto?.media?.catwalk.length >= 1 ? (
              <>
                {currentContent == "video" ? (
                  <>
                    <BsImages></BsImages>
                    <p>galeria</p>
                  </>
                ) : (
                  <>
                    <BsPlay></BsPlay>
                    <p>video</p>
                  </>
                )}
              </>
            ) : (
              <>
                <BsImages></BsImages>
                <p>galeria</p>
              </>
            )}
          </BotonMedia>
        </>
      )}
    </StyledThumbnails>
  );
};

export default Thumbnails;
