import styled from "styled-components";

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #00000057;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  display: flex;
  transition: var(--transition);
  z-index: 99;
`;
const ContenedorNavs = styled.div`
  width: 266px;
  height: 100%;
  background: white;
  display: flex;
  position: relative;
  overflow-x: hidden;
  max-width: 500px;
  transition: var(--transition);
  @media (min-width: 400px) {
    width: 320px;
  }
  &.left {
    left: ${({ isOpen }) => (isOpen ? "0px" : "-100%")};
  }
  &.right {
    right: ${({ isOpen }) => (isOpen ? "0px" : "-100%")};
  }
`;

const BtnCerrar = styled.div`
  width: calc(100% - 266px);
  height: 50px;
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: var(--transition);
  span {
    position: absolute;
    width: 30px;
    height: 3px;
    background: white;
    transform: rotate(45deg);
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
  }
  &.left {
    left: ${({ isOpen }) => (isOpen ? "0px" : "-100%")};
  }
  &.right {
    right: ${({ isOpen }) => (isOpen ? "0px" : "-100%")};
  }
`;
export { Modal, ContenedorNavs, BtnCerrar };
