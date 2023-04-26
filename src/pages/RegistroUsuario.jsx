import React, { useEffect } from "react";
import Registro from "../components/Usuario/Registro/Registro";
import LayoutUsuario from "../Layout/LayoutUsuario";

const RegistroUsuario = () => {
  useEffect(() => {
    document.title = "Akira Ecommerce | Registro";
  }, []);

  return (
    <LayoutUsuario>
      <Registro />
    </LayoutUsuario>
  );
};

export default RegistroUsuario;
