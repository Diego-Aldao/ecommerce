import React from "react";
import Footer from "./Footer/Footer";
import NavPrincipal from "./Nav/NavPrincipal";

const Layout = ({ children }) => {
  return (
    <>
      <NavPrincipal />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
