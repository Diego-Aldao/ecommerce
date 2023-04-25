import { useEffect, useState } from "react";
import dataHome from "../data/Home.json";

const useContentHome = ({ genero }) => {
  const [dataGenero, setDataGenero] = useState();

  const currentData =
    genero == "/hombre" ? dataHome.home[1].children : dataHome.home[0].children;

  useEffect(() => {
    setDataGenero(currentData);
  }, [genero]);

  return { dataGenero };
};

export default useContentHome;
