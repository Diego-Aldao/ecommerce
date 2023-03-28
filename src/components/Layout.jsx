import React from "react";
import Footer from "./Footer/Footer";
import FooterDesktop from "./Footer/FooterDesktop";
import NavPrincipal from "./Nav/NavPrincipal";

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
