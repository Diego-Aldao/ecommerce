import React from "react";
import Footer from "../components/Footer/Footer";
import FooterDesktop from "../components/Footer/FooterDesktop";
import NavPrincipal from "../components/Nav/NavPrincipal";

const Layout = ({ children }) => {
  return (
    <>
      <NavPrincipal />
      {children}
      <FooterDesktop />
      <Footer />
    </>
  );
};

export default Layout;
