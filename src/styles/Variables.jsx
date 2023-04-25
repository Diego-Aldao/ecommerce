import { css } from "styled-components";

const Variables = css`
  :root {
    --color-principal: #f9d7f6;
    --color-secundario: #fcdfd7;
    --color-promo: #aef6f7;
    --color-promo2: #e690bd;
    --color-gris: #ebebeb;
    --color-texto: #383838;
    --color-gris-secundario: #a8a8a8;
    --gradiente-principal: linear-gradient(
      to right,
      var(--color-principal),
      var(--color-secundario)
    );
    --gradiente-secundario: linear-gradient(
      to left,
      var(--color-promo),
      var(--color-promo2)
    );

    --fuente-principal: "Josefin Sans", sans-serif;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
export default Variables;
