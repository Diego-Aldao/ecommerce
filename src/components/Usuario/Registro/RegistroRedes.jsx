import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Contenedor = styled.section`
  width: 100%;
  padding: 0px 15px;
  margin-top: 50px;
  header {
    h3 {
      text-align: center;
      text-transform: uppercase;
      font-size: 16px;
      letter-spacing: 1px;
    }
  }
`;

const BotonesRedes = styled.div`
  width: 100%;
  margin-top: 20px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const BtnLoginRedes = styled.button`
  width: 100%;
  height: 50px;
  border: 2px solid var(--color-gris);
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
  .icono {
    position: absolute;
    width: 50px;
    height: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
  .facebook {
    svg {
      fill: #1877f2;
    }
  }
  p {
    padding-top: 2px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    margin: 15px 5px 0px;
  }
`;

const DescripcionRedes = styled.p`
  margin-top: 40px;
  line-height: 1.5;
  text-align: center;
  font-size: 14px;
`;

const RegistroRedes = () => {
  return (
    <Contenedor>
      <header>
        <h3>registrate con...</h3>
      </header>
      <BotonesRedes>
        <BtnLoginRedes>
          <div className="icono">
            <FcGoogle />
          </div>
          <p>google </p>
        </BtnLoginRedes>
        <BtnLoginRedes>
          <div className="icono">
            <AiFillApple />
          </div>
          <p>apple</p>
        </BtnLoginRedes>
        <BtnLoginRedes>
          <div className="icono facebook">
            <FaFacebook />
          </div>
          <p>facebook</p>
        </BtnLoginRedes>
      </BotonesRedes>
      <DescripcionRedes>
        Iniciar sesión con tu perfil social es muy rápido. No tendrás que
        recordar más contraseñas, tu memoria no te fallará. No te preocupes,
        nunca compartiremos tus datos ni publicaremos nada en tu nombre.
      </DescripcionRedes>
    </Contenedor>
  );
};

export default RegistroRedes;
