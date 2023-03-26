import React, { useState } from "react";
import useWindowSize from "../../../../hooks/useWindowSize";
import { Modal, ContenedorNavs, BtnCerrar } from "../../../ModalFixed";
import DetalleFiltro from "./DetalleFiltro";
import Filtros from "./Filtros";

const FiltroMovil = ({ isOpen, setIsOpen, data, loading }) => {
  const [position, setPosition] = useState();
  const [dataFiltros, setDataFiltros] = useState();
  const size = useWindowSize();

  if (size.width > 768) {
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="modal-fixed">
      <BtnCerrar isOpen={isOpen} setIsOpen={setIsOpen} className="right">
        <span></span>
        <span></span>
      </BtnCerrar>
      <ContenedorNavs isOpen={isOpen} className="right">
        <Filtros
          position={position}
          setPosition={setPosition}
          filtros={data}
          setDataFiltros={setDataFiltros}
        />
        <DetalleFiltro
          position={position}
          setPosition={setPosition}
          dataFiltros={dataFiltros}
        />
      </ContenedorNavs>
    </Modal>
  );
};

export default FiltroMovil;
