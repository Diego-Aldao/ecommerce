import { useContext } from "react";
import CarritoContext from "../context/CarritoContext";

const useCarrito = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const añadirProductoCarrito = (producto) => {
    //SI EL PRODUCTO YA EXISTE
    if (carrito?.some((guardado) => guardado.id === producto.id)) {
      let arrayGuardados = carrito.filter(
        (guardado) => guardado.id !== producto.id
      );
      localStorage.setItem("Carrito", JSON.stringify(arrayGuardados));
      setCarrito(arrayGuardados);
    } else {
      //SI EL PRODUCTO NO EXISTE
      let arrayGuardados = [];
      if (!localStorage.getItem("Carrito")) {
        arrayGuardados.push(producto);
        localStorage.setItem("Carrito", JSON.stringify(arrayGuardados));
      } else {
        arrayGuardados = JSON.parse(localStorage.getItem("Carrito"));
        arrayGuardados.push(producto);
        localStorage.setItem("Carrito", JSON.stringify(arrayGuardados));
      }

      setCarrito((prevArray) => [...prevArray, producto]);
    }
  };
  return { carrito, añadirProductoCarrito };
};

export default useCarrito;
