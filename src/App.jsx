import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import ListadoProductos from "./pages/ListadoProductos";
import DetalleProducto from "./pages/DetalleProducto";
import EstilosGlobales from "./styles/EstilosGlobales";
import { ProductosContextProvider } from "./context/ProductosContext";
import { CategoriaContextProvider } from "./context/IdCategoriaContext";
import { GuardadosContextProvider } from "./context/GuardadosContext";
import ProductosGuardados from "./pages/ProductosGuardados";
import { CarritoContextProvider } from "./context/CarritoContext";
import CarritoProductos from "./pages/CarritoProductos";
import LoginUsuario from "./pages/LoginUsuario";
import RegistroUsuario from "./pages/RegistroUsuario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPrincipal />,
  },
  {
    path: "mujer",
    element: <PaginaPrincipal />,
  },
  {
    path: "hombre",
    element: <PaginaPrincipal />,
  },
  {
    path: "/productos/:genero/:categoria1/:categoria2/:idCategoria",
    element: <ListadoProductos />,
  },
  {
    path: "/productos/:genero/:categoria1/:idCategoria",
    element: <ListadoProductos />,
  },
  {
    path: "/detalle/:categoria/:producto/prd/:querys",
    element: <DetalleProducto />,
  },
  {
    path: "/guardados",
    element: <ProductosGuardados />,
  },
  {
    path: "/carrito",
    element: <CarritoProductos />,
  },
  {
    path: "/login",
    element: <LoginUsuario />,
  },
  {
    path: "/registro",
    element: <RegistroUsuario />,
  },
]);

function App() {
  return (
    <GuardadosContextProvider>
      <CarritoContextProvider>
        <CategoriaContextProvider>
          <ProductosContextProvider>
            <EstilosGlobales />
            <RouterProvider router={router} />
          </ProductosContextProvider>
        </CategoriaContextProvider>
      </CarritoContextProvider>
    </GuardadosContextProvider>
  );
}

export default App;
