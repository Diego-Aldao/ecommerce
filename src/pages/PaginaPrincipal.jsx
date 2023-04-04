import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import Header from "../components/Inicio/Header";
import Hero from "../components/Inicio/Hero";
import Descuentos from "../components/Inicio/Descuentos";
import UltimosLanzamientos from "../components/Inicio/UltimosLanzamientos/UltimosLanzamientos";
import ItemLanzamientos from "../components/Inicio/UltimosLanzamientos/ItemLanzamientos";
import Promos from "../components/Inicio/Promos/Promos";
import ItemPromos from "../components/Inicio/Promos/ItemPromos";
import Tendencias from "../components/Inicio/Tendencias/Tendencias";
import ItemTendencias from "../components/Inicio/Tendencias/ItemTendencias";
import { useLocation } from "react-router-dom";
import useContentHome from "../hooks/useContentHome";

const PaginaPrincipal = () => {
  const size = useWindowSize(); //hook para obtener el width y height del window
  const location = useLocation(); //hook de react-router-dom para obtener el pathname
  const genero = location.pathname;
  const { dataGenero } = useContentHome({ genero }); //hook para obtener la data correcta segun el genero

  return (
    <LayoutPrincipal>
      {size.width < 768 ? (
        <>
          <Header />
          <Hero data={dataGenero[0]} />
        </>
      ) : (
        <>
          <Hero data={dataGenero[0]} />
          <Header />
        </>
      )}
      <UltimosLanzamientos>
        {dataGenero[1] !== undefined ? (
          dataGenero[1].map((item) => {
            return <ItemLanzamientos data={item} key={item.id} />;
          })
        ) : (
          <>loading</>
        )}
      </UltimosLanzamientos>
      <Descuentos data={dataGenero[2]} />
      <Promos>
        {dataGenero[3] !== undefined ? (
          dataGenero[3].map((item) => {
            return <ItemPromos data={item} key={item.id} />;
          })
        ) : (
          <>loading</>
        )}
      </Promos>
      <Tendencias>
        {dataGenero[4] !== undefined ? (
          dataGenero[4].map((item) => {
            return <ItemTendencias data={item} key={item.id} />;
          })
        ) : (
          <>loading</>
        )}
      </Tendencias>
    </LayoutPrincipal>
  );
};

export default PaginaPrincipal;
