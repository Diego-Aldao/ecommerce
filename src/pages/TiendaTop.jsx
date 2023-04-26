import React, { useEffect, useState } from "react";
import Layout from "../Layout/LayoutPrincipal";
import Header from "../components/TiendaTop/Header";
import dataTop from "../data/TiendaTop.json";
import { useLocation } from "react-router-dom";
import GaleriaProductos from "../components/TiendaTop/GaleriaProductos";
import PrimerBanner from "../components/TiendaTop/PrimerBanner";
import GaleriaCategorias from "../components/TiendaTop/GaleriaCategorias";
import SegundoBanner from "../components/TiendaTop/SegundoBanner";
import Loading from "../components/Loading";

const TiendaTop = () => {
  const [currentData, setCurrentData] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("topshop")) {
      setCurrentData(dataTop.mujer);
    } else {
      setCurrentData(dataTop.hombre);
    }
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
    document.title = "Akira Ecommerce | Tienda Top";
  }, []);

  return (
    <Layout>
      {currentData ? (
        <>
          <Header data={currentData} />
          <GaleriaProductos data={currentData.galeriaProductos} />
          <PrimerBanner data={currentData.banner1} />
          <GaleriaCategorias data={currentData.galeriaCategorias} />
          <SegundoBanner data={currentData.banner2} />
        </>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default TiendaTop;
