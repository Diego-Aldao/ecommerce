import React, { useEffect } from "react";
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
import Loader from "../components/Loader";

const PaginaPrincipal = () => {
  const size = useWindowSize(); //custom hook para obtener el width y height del window
  const location = useLocation();
  const genero = location.pathname;
  const { dataGenero } = useContentHome({ genero }); //custom hook para obtener la data del genero correcto

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
    document.title = "Akira Ecommerce | Nueva Temporada";
  }, [genero]);

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
        <Loader width={"100%"} height={"100vh"} />
      )}
    </LayoutPrincipal>
  );
};

export default PaginaPrincipal;
