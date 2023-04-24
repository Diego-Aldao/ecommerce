import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { BsPlay, BsImages } from "react-icons/bs";
import ReactPlayer from "react-player";
import Thumbnails from "./Thumbnails";

const ContenedorMedia = styled.div`
  position: relative;
  width: 100%;
  .slide {
    img {
      object-fit: cover;
    }
  }
  @media (min-width: 768px) {
    .media {
      display: flex;
      max-height: 660px;
      top: 0px;
      position: sticky;
    }
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

const Galeria = ({ data }) => {
  const [currentContent, setCurrentContent] = useState("galeria");
  const ref = useRef();
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const tempImagenes = [];
    data?.media?.images?.map((imagen) =>
      tempImagenes.push({
        original: `https://${imagen.url}?$n_640w$&wid=513`,
      })
    );
    setImagenes(tempImagenes);
  }, [data]);

  const handleContent = () => {
    if (!data.media.catwalk.length >= 1) return;
    if (currentContent == "video") {
      setCurrentContent("galeria");
    } else {
      setCurrentContent("video");
    }
  };

  const handleClick = (index) => {
    ref.current.slideToIndex(index);
  };
  return (
    <ContenedorMedia>
      <div className="media">
        <Thumbnails
          imagenes={imagenes}
          detalleProducto={data}
          handleContent={handleContent}
          handleClick={handleClick}
          currentContent={currentContent}
        />
        {data.desdeProductos ? (
          <img src={`https://${data.imageUrl}`} alt="" />
        ) : (
          <>
            {currentContent == "video" ? (
              <div className="video">
                {data.media.catwalk.map((item) => {
                  return (
                    <ReactPlayer
                      url={`https://${item.url}.m3u8`}
                      width="100%"
                      height="100%"
                      playing={true}
                      loop={true}
                      controls={true}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="slide">
                <ImageGallery
                  items={imagenes}
                  showThumbnails={false}
                  showNav={false}
                  showBullets={true}
                  slideDuration={250}
                  showFullscreenButton={false}
                  ref={ref}
                />
              </div>
            )}
          </>
        )}
        <BotonMedia onClick={handleContent}>
          {currentContent == "video" ? "galeria" : "video"}
        </BotonMedia>
      </div>
    </ContenedorMedia>
  );
};

export default Galeria;
