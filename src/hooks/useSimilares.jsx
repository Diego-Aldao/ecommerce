import { useContext, useState } from "react";
import CategoriaContext from "../context/IdCategoriaContext";
import ProductosContext from "../context/ProductosContext";

const useSimilares = () => {
  const { productos, setProductos } = useContext(ProductosContext);
  const { categoria } = useContext(CategoriaContext);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  const fetchData = (idColor, idMarca) => {
    let url = `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&${categoria}&limit=20&country=US&sort=freshness&currency=USD&sizeSchema=US&${idMarca}&lang=en-US`;
    if (idColor !== undefined) {
      url = `https://asos2.p.rapidapi.com/products/v2/list?store=ES&offset=0&${categoria}&limit=48&country=ES&sort=freshness&base_colour=${idColor}&currency=EUR&sizeSchema=ES&lang=es-ES`;
    }
    fetch(url, options)
      .then((response) => response.json())
      .then((dataFetch) => setProductos(dataFetch))
      .catch(setError);
  };

  const getIdColor = (producto, filtros) => {
    const colores = filtros.filter((filtro) => filtro.id == "base_colour");
    const idColor = colores[0].facetValues.filter(
      (color) => color.name == producto.colour
    )[0]?.id;
    return idColor;
  };

  const getIdMarca = (producto, filtros) => {
    const marcas = filtros.filter((filtro) => filtro.id == "brand");
    const idMarca = marcas[0].facetValues.filter(
      (marca) => marca.name == producto.brandName
    )[0]?.id;
    return idMarca;
  };

  return { productos, getIdColor, getIdMarca, fetchData };
};

export default useSimilares;
