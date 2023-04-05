import React from "react";
import ModalUsuario from "../ModalUsuario";
import NavegacionUsuario from "../NavegacionUsuario";
import Formulario from "./Formulario";
import LoginRedes from "./LoginRedes";

const Login = () => {
  return (
    <ModalUsuario>
      <NavegacionUsuario />
      <Formulario />
      <LoginRedes />
    </ModalUsuario>
  );
};

export default Login;
