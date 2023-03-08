import styled from "styled-components";

const ContenedorWidth = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0px 10px;
  @media (min-width: 768px) {
    padding: 0px 24px;
  }
  @media (min-width: 992px) {
    padding: 0px 32px;
    margin: 60px auto;
  }
  &.no-padding {
    padding: 0;
  }
`;

export default ContenedorWidth;
