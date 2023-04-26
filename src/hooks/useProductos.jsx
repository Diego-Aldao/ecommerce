import { useCallback, useContext, useState } from "react";
import axios from "axios";
import LoadingContext from "../context/LoadingContext";

const useProductos = () => {
  const [productos, setProductos] = useState();
  const { loading, setLoading } = useContext(LoadingContext);

  const handleFetch = (response, value) => {
    setProductos(response.data);
    localStorage.setItem("Productos", JSON.stringify(response.data));

    localStorage.setItem("LastFetch", value);
  };

  const getProductos = useCallback(({ idCategoria }) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "ES",
        offset: "0",
        categoryId: `${idCategoria}`,
        limit: "48",
        country: "ES",
        sort: "freshness",
        currency: "EUR",
        sizeSchema: "ES",
        lang: "es-ES",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        handleFetch(response, idCategoria);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const searchProductos = useCallback(({ querys }) => {
    setLoading(true);

    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "ES",
        offset: "0",
        categoryId: `4200`,
        limit: "48",
        country: "ES",
        sort: "freshness",
        q: `${querys}`,
        currency: "EUR",
        sizeSchema: "ES",
        lang: "es-ES",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        handleFetch(response, querys);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const filterProductos = useCallback(({ filtros }) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: filtros,
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        handleFetch(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return { productos, getProductos, loading, searchProductos, filterProductos };
};

export default useProductos;
