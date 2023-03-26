import { useState } from "react";
const useFiltros = () => {
  const [seleccionados, setSeleccionados] = useState([]);

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

  return { changeSelection, changeSelectionAll, seleccionados };
};

export default useFiltros;
