import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import useProductos from "../../hooks/useProductos";

export const StyledGaleria = styled.section`
  width: 100%;
  position: relative;
  cursor: default;
  bottom: -5px;
  max-width: 1300px;
  margin: 30px auto;
  .swiper-pagination-bullet-active {
    background: var(--color-promo2);
  }
  @media (min-width: 768px) {
    padding: 0px 80px;
    margin-block: 50px;
  }
`;

const StyledSlide = styled(SwiperSlide)`
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
  span,
  p {
    padding: 5px 10px;
    line-height: 1.1;
    margin-bottom: 15px;
  }
  p:first-letter {
    text-transform: capitalize;
  }
  span {
    font-weight: 700;
    font-size: 18px;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const GaleriaProductos = ({ data }) => {
  const navigate = useNavigate();
  const { getProductos } = useProductos();

  const handleClick = (producto) => {
    const idCategoria = producto.categoria;

    let productoLS = {
      id: producto.id,
      name: producto.nombre,
      price: producto.price,
      imageUrl: producto.imagenUrl,
      desdeProductos: true,
    };
    getProductos({ idCategoria });
    localStorage.setItem("DetalleProducto", JSON.stringify(productoLS));
    navigate(producto.linkDetalle);
  };

  return (
    <StyledGaleria>
      <Swiper
        loop={true}
        slidesPerView={1}
        style={{
          width: "100%",
          height: "100%",
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          480: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {data?.map((slide) => {
          return (
            <StyledSlide
              key={slide.id}
              onClick={() => {
                handleClick(slide);
              }}
            >
              {/*hacer un handle click para tener la misma funcionalidad que en los items de listado producto */}
              <img src={`https://${slide.imagenUrl}`} alt="" />
              <p>{slide.nombre}</p>
              <span>{slide.price.current.text}</span>
            </StyledSlide>
          );
        })}
      </Swiper>
    </StyledGaleria>
  );
};

export default GaleriaProductos;
