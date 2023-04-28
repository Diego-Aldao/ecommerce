import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemFiltro from "./ItemFiltro/ItemFiltro";
import useFiltros from "../../../../hooks/useFiltros";
import useProductos from "../../../../hooks/useProductos";
import Loader from "../../../Loader";

const Background = styled.div`
  width: 100%;
  background: var(--color-gris);
  padding-bottom: 20px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ContenedorFiltros = styled.ul`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding: 20px 15px;
  flex-wrap: wrap;
  min-height: 245px;
`;
const BotonAplicar = styled.button`
  text-transform: uppercase;
  margin: 10px auto 0px;
  padding: 10px 20px;
  border: 1px solid black;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
const FiltroDesktop = ({
  filtros,
  currentItem,
  setCurrentItem,
  location,
  idCategoria,
  querys,
}) => {
  const { filtrosFetch, setFiltrosFetch } = useFiltros();
  const { filterProductos } = useProductos();
  const [currentLoading, setCurrentLoading] = useState(false);
  //para hacer un loading solo la primera vez

  const handleClick = () => {
    //cada itemFiltro habra modificado el filtrosFetch y cuando haga este click, ya estara listo el objeto con los filtros para hacer el fetch
    filterProductos(filtrosFetch);
  };

  useEffect(() => {
    setCurrentLoading(true);
    setTimeout(() => {
      setCurrentLoading(false);
    }, 2000);
    if (location.pathname.includes("busqueda") && querys) {
      setFiltrosFetch({ ...filtrosFetch, q: querys });
    } else if (location.pathname.includes("productos") && idCategoria) {
      setFiltrosFetch({ ...filtrosFetch, q: "", categoryId: idCategoria });
    }
  }, [idCategoria, querys]);

  return (
    <>
      {currentLoading ? (
        <Loader height={"310px"} width={"100%"} />
      ) : (
        <Background>
          <ContenedorFiltros>
            {filtros?.map((item) => {
              return (
                <ItemFiltro
                  key={item.id}
                  data={item}
                  currentItem={currentItem}
                  setCurrentItem={setCurrentItem}
                />
              );
            })}
          </ContenedorFiltros>
          <BotonAplicar onClick={handleClick}>aplicar filtros</BotonAplicar>
        </Background>
      )}
    </>
  );
};

export default FiltroDesktop;
