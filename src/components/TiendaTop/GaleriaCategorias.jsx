import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const StyledGaleria = styled.section`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
  span,
  p {
    padding: 5px 10px;
    line-height: 1.1;
    margin-bottom: 15px;
    margin: 15px 0px 0px;
    font-weight: 700;
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
const GaleriaCategorias = ({ data }) => {
  return (
    <StyledGaleria>
      <Swiper
        slidesPerView={1}
        style={{
          width: "100%",
          height: "100%",
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={25}
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {data?.map((slide) => {
          return (
            <StyledSlide key={slide.id}>
              <Link to={slide.linkCategoria}>
                <img src={slide.imagenUrl} alt="" />
                <p>{slide.nombre}</p>
              </Link>
            </StyledSlide>
          );
        })}
      </Swiper>
    </StyledGaleria>
  );
};

export default GaleriaCategorias;
