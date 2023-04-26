import { useEffect } from "react";
import { useState } from "react";

const useDestino = (link) => {
  const [linkFormateado, setLinkFormateado] = useState("");

  useEffect(() => {
    if (!link.includes("/")) return;
    let ruta = link
      .replaceAll("https://www.asos.com/es/", "/")
      .replaceAll("/cat", "")
      .replaceAll("/ctas", "")
      .split("?", 2);
    let url = ruta[0] ? ruta[0] : ruta;
    let querys = ruta[1]?.replaceAll("cid=", "categoryId=");
    const destino = `/productos${url}${querys ? querys : ""}`;
    setLinkFormateado(destino);
  }, [link]);
  return { linkFormateado };
};

export default useDestino;
