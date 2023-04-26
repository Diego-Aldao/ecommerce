import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const Links = styled.header`
  width: 100%;
  display: flex;
  button {
    flex: 1 1 auto;
    padding: 20px 0px;
    position: relative;
    border-bottom: 1px solid var(--color-gris);
    span {
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      color: #646464;
    }
  }
  .registro {
    border-bottom: ${({ path }) =>
      path == "/registro"
        ? "4px solid var(--color-principal)"
        : "4px solid var(--color-gris)"};
  }
  .login {
    border-bottom: ${({ path }) =>
      path == "/login"
        ? "4px solid var(--color-principal)"
        : "4px solid var(--color-gris)"};
  }
  button:first-child:after {
    content: "";
    position: absolute;
    right: 0px;
    width: 1px;
    height: 25%;
    background: var(--color-gris);
  }
  @media (min-width: 768px) {
    padding: 30px 15px 0px;
  }
`;

const NavegacionUsuario = () => {
  const [path, setPath] = useState();
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, []);

  return (
    <Links path={path}>
      <button className="registro">
        <Link to="/registro">
          <span>regístrate</span>
        </Link>
      </button>
      <button className="login">
        <Link to="/login">
          <span>acceder</span>
        </Link>
      </button>
    </Links>
  );
};

export default NavegacionUsuario;
