import { useEffect } from "react";
import { useState } from "react";

const useDestino = (link) => {
  const [linkFormateado, setLinkFormateado] = useState("");

  useEffect(() => {
    if (link.includes("/")) {
      let ruta = link
        .replaceAll("https://www.asos.com/es/", "/")
        .replaceAll("/cat", "")
        .split("?", 2);
      let url = ruta[0];
      let querys = ruta[1].replaceAll("cid=", "categoryId=");
      const destino = `/productos${url}${querys}`;
      setLinkFormateado(destino);
    }
  }, [link]);
  return { linkFormateado };
};

export default useDestino;
