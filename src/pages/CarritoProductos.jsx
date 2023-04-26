import React, { useEffect } from "react";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import Carrito from "../components/Carrito/Carrito";

const CarritoProductos = () => {
  useEffect(() => {
    document.title = "Akira Ecommerce | Carrito";
  }, []);

  return (
    <LayoutPrincipal>
      <Carrito />
    </LayoutPrincipal>
  );
};

export default CarritoProductos;
