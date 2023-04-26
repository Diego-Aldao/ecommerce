import React, { useEffect } from "react";
import LayoutUsuario from "../Layout/LayoutUsuario";
import Login from "../components/Usuario/Login/Login";

const LoginUsuario = () => {
  useEffect(() => {
    document.title = "Akira Ecommerce | Login";
  }, []);

  return (
    <LayoutUsuario>
      <Login />
    </LayoutUsuario>
  );
};

export default LoginUsuario;
