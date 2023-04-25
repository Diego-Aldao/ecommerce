import { useState } from "react";
const useFiltros = () => {
  const [seleccionados, setSeleccionados] = useState([]);
  const initialParams = {
    store: "ES",
    limit: "48",
    country: "ES",
    currency: "EUR",
    sizeSchema: "ES",
    lang: "es-ES",
    offset: "0",
  };
  const [filtrosFetch, setFiltrosFetch] = useState(initialParams);

  const changeSelection = (filtro) => {
    if (filtro.isSelected == false) {
      filtro.isSelected = !filtro.isSelected;
      setSeleccionados([...seleccionados, filtro]);
    } else {
      filtro.isSelected = !filtro.isSelected;
      const updateSeleccionados = seleccionados.filter(
        (obj) => obj.id !== filtro.id
      );
      setSeleccionados(updateSeleccionados);
    }
  };

  const changeSelectionAll = (data, valor) => {
    data.facetValues.map((value) => (value.isSelected = valor));
    if (data.facetValues.every((value) => value.isSelected == true)) {
      setSeleccionados(data.facetValues);
    } else {
      setSeleccionados([]);
    }
  };

  const borrarFiltrosVacios = (nombre) => {
    let arrayParams = Object?.entries(filtrosFetch);
    let filtrados = arrayParams.filter((nombres) => !nombres.includes(nombre));
    let newParams = Object.fromEntries(filtrados);
    setFiltrosFetch(newParams);
  };

  const agregarKeyValue = (nombre) => {
    let filtrosId = [];
    seleccionados.map((seleccionado) => filtrosId.push(seleccionado.id));

    setFiltrosFetch((filtrosFetch) => ({
      ...filtrosFetch,
      [`${nombre}`]: filtrosId.toString(),
    }));
  };

  return {
    changeSelection,
    changeSelectionAll,
    borrarFiltrosVacios,
    agregarKeyValue,
    seleccionados,
    filtrosFetch,
    setFiltrosFetch,
  };
};

export default useFiltros;
