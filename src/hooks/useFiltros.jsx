import { useState } from "react";
const useFiltros = (dataFiltros) => {
  const [selected, setSelected] = useState([]);

  const changeSelection = (filtro) => {
    if (filtro.isSelected == false) {
      filtro.isSelected = !filtro.isSelected;
      setSelected([...selected, filtro]);
    } else {
      filtro.isSelected = !filtro.isSelected;
      const updateSeleccionados = selected.filter((obj) => {
        obj.id !== filtro.id;
      });
      setSelected([...selected, updateSeleccionados]);
    }
  };

  const changeSelectionAll = (valor) => {
    dataFiltros.facetValues.map((value) => (value.isSelected = valor));
    setSelected(dataFiltros.facetValues);
  };

  return { changeSelection, changeSelectionAll, selected };
};

export default useFiltros;
