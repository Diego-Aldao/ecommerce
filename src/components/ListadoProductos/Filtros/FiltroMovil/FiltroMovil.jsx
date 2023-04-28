import React, { useState } from "react";
import useWindowSize from "../../../../hooks/useWindowSize";
import { Modal, ContenedorNavs, BtnCerrar } from "../../../ModalFixed";
import NombresFiltros from "./NombresFiltros/NombresFiltros";
import DetalleFiltro from "./DetalleFiltros/DetalleFiltro";
import useProductos from "../../../../hooks/useProductos";
import Loader from "../../../Loader";

const FiltroMovil = ({
  isOpen,
  setIsOpen,
  currentItem,
  setCurrentItem,
  filtros,
}) => {
  const size = useWindowSize();
  const [dataFiltros, setDataFiltros] = useState();
  const [position, setPosition] = useState();
  const { loading } = useProductos();

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
        {loading ? (
          <Loader width={"100%"} height={"100vh"} />
        ) : (
          <>
            <NombresFiltros
              position={position}
              setPosition={setPosition}
              filtros={filtros}
              setDataFiltros={setDataFiltros}
              setCurrentItem={setCurrentItem}
              setIsOpen={setIsOpen}
            />
            <DetalleFiltro
              position={position}
              setPosition={setPosition}
              dataFiltros={dataFiltros}
              currentItem={currentItem}
            />
          </>
        )}
      </ContenedorNavs>
    </Modal>
  );
};

export default FiltroMovil;
