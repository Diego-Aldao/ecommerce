import { useState, useEffect } from "react";

const useNavegacion = () => {
  const [navegacion, setNavegacion] = useState();
  const [loading, setLoading] = useState();

  const handleData = (data) => {
    let { navigation } = data;
    setNavegacion(navigation);
    localStorage.setItem("Navegacion", JSON.stringify(navigation));
  };
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };
  const fetchData = () => {
    setLoading(true);
    const URL_NAVEGACION_API =
      "https://asos2.p.rapidapi.com/categories/list?country=ES&lang=es-ES";

    fetch(URL_NAVEGACION_API, options)
      .then((response) => response.json())
      .then((dataFetch) => {
        handleData(dataFetch);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (localStorage.getItem("Navegacion")) {
      setNavegacion(JSON.parse(localStorage.getItem("Navegacion")));
    } else {
      fetchData();
    }
  }, []);

  return { navegacion, loading };
};

export default useNavegacion;
