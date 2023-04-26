import axios from "axios";
import { useState } from "react";

const useDetalleProducto = () => {
  const [detalle, setDetalle] = useState();
  const [loading, setLoading] = useState(false);

  const handleFetch = (response, productoId) => {
    setDetalle(response.data);
    localStorage.setItem("DetalleProducto", JSON.stringify(response.data));
    localStorage.setItem("LastFetchDetalle", productoId);
  };

  const getDetalleProducto = ({ productoId }) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v3/detail",
      params: {
        id: `${productoId}`,
        lang: "es-ES",
        store: "ES",
        sizeSchema: "ES",
        currency: "EUR",
      },
      headers: {
        "X-RapidAPI-Key": "88b3f1fbc5msh84aa9bd0735a359p1751c3jsnf1eef21f214e",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        handleFetch(response, productoId);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return { getDetalleProducto, detalle, loading };
};

export default useDetalleProducto;
