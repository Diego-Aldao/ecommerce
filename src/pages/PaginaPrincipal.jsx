import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import Header from "../components/Inicio/Header/Header";
import Hero from "../components/Inicio/Hero/Hero";
import Descuentos from "../components/Inicio/Descuentos/Descuentos";
import UltimosLanzamientos from "../components/Inicio/UltimosLanzamientos/UltimosLanzamientos";
import ItemLanzamientos from "../components/Inicio/UltimosLanzamientos/ItemLanzamientos";
import Promos from "../components/Inicio/Promos/Promos";
import ItemPromos from "../components/Inicio/Promos/ItemPromos";
import Tendencias from "../components/Inicio/Tendencias/Tendencias";
import ItemTendencias from "../components/Inicio/Tendencias/ItemTendencias";
import { useLocation } from "react-router-dom";
import useContentHome from "../hooks/useContentHome";
import Loading from "../components/Loading";

const PaginaPrincipal = () => {
  const size = useWindowSize(); //custom hook para obtener el width y height del window
  const location = useLocation();
  const genero = location.pathname;
  const { dataGenero } = useContentHome({ genero }); //custom hook para obtener la data del genero correcto

  return (
    <LayoutPrincipal>
      {dataGenero ? (
        <>
          {size.width < 768 ? (
            <>
              <Header />
              <Hero data={dataGenero.hero} />
            </>
          ) : (
            <>
              <Hero data={dataGenero.hero} />
              <Header />
            </>
          )}
          <UltimosLanzamientos>
            {dataGenero.lanzamientos.children.map((item) => (
              <ItemLanzamientos data={item} key={item.id} />
            ))}
          </UltimosLanzamientos>
          <Descuentos data={dataGenero.descuento} />
          <Promos>
            {dataGenero.promos.children.map((item) => (
              <ItemPromos data={item} key={item.id} />
            ))}
          </Promos>
          <Tendencias>
            {dataGenero.marcas.children.map((item) => (
              <ItemTendencias data={item} key={item.id} />
            ))}
          </Tendencias>
        </>
      ) : (
        <Loading />
      )}
    </LayoutPrincipal>
  );
};

export default PaginaPrincipal;
