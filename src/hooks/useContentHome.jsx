import React, { useEffect, useState } from "react";
import dataHome from "../data/Home.json";

const useContentHome = ({ genero }) => {
  const [dataGenero, setDataGenero] = useState([]);

  const currentData =
    genero == "/hombre" ? dataHome.home[1].children : dataHome.home[0].children;
  const hero = currentData[0];
  const ultimosLanzamientos = currentData[1].children;
  const descuento = currentData[2];
  const promos = currentData[3].children;
  const tendencias = currentData[4].children;

  useEffect(() => {
    setDataGenero([hero, ultimosLanzamientos, descuento, promos, tendencias]);
  }, [genero]);

  return { dataGenero };
};

export default useContentHome;
