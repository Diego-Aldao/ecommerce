import { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const EstilosGlobales = createGlobalStyle`
    ${Variables};

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--fuente-principal);
    }
    h1,
    h2,
    h3,
    h4,
    span,
    button {
        color: var(--color-texto);
    }

    p {
      line-height: 1.5;
      font-weight: 400;
      color: #222;
      letter-spacing: 0.4px;
    }

    button, input{
        background: none;
        outline-color: transparent;
        border: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    ul{
        list-style-type: none;
    }
    img{
        width: 100%;
        object-fit: cover;
    }
`;
export default EstilosGlobales;
