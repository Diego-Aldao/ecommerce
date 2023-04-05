import React from "react";
import ModalUsuario from "../ModalUsuario";
import NavegacionUsuario from "../NavegacionUsuario";
import Formulario from "./Formulario";
import RegistroRedes from "./RegistroRedes";

const Registro = () => {
  return (
    <ModalUsuario>
      <NavegacionUsuario />
      <RegistroRedes />
      <Formulario />
    </ModalUsuario>
  );
};

export default Registro;
