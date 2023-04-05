import { useContext } from "react";
import GuardadosContext from "../context/GuardadosContext";

const useGuardados = () => {
  const { guardados, setGuardados } = useContext(GuardadosContext);

  const guardarProducto = (producto) => {
    //SI EL PRODUCTO YA EXISTE
    if (guardados?.some((guardado) => guardado.id === producto.id)) {
      let arrayGuardados = guardados.filter(
        (guardado) => guardado.id !== producto.id
      );
      localStorage.setItem("Guardados", JSON.stringify(arrayGuardados));
      setGuardados(arrayGuardados);
    } else {
      //SI EL PRODUCTO NO EXISTE
      let arrayGuardados = [];
      if (!localStorage.getItem("Guardados")) {
        arrayGuardados.push(producto);
        localStorage.setItem("Guardados", JSON.stringify(arrayGuardados));
      } else {
        arrayGuardados = JSON.parse(localStorage.getItem("Guardados"));
        arrayGuardados.push(producto);
        localStorage.setItem("Guardados", JSON.stringify(arrayGuardados));
      }

      setGuardados((prevArray) => [...prevArray, producto]);
    }
  };
  return { guardados, guardarProducto };
};

export default useGuardados;
