import React, { useEffect } from "react";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import Guardados from "../components/Guardados/Guardados";

const ProductosGuardados = () => {
  useEffect(() => {
    document.title = "Akira Ecommerce | Guardados";
  }, []);

  return (
    <LayoutPrincipal>
      <Guardados />
    </LayoutPrincipal>
  );
};

export default ProductosGuardados;
