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
import { FiltrosFetchContextProvider } from "./context/FiltrosFetchContext";
import { DetalleContextProvider } from "./context/DetalleContext";
import { LoadingContextProvider } from "./context/LoadingContext";
import TiendaTop from "./pages/TiendaTop";

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
    path: "/productos/:genero/:categoria1/:categoria2/:categoria3/:idCategoria",
    element: <ListadoProductos />,
  },
  {
    path: "/productos/:genero/:categoria1/:categoria2/:categoria3/:idCategoria",
    element: <ListadoProductos />,
  },
  {
    path: "/busqueda/:querys",
    element: <ListadoProductos />,
  },
  {
    path: "/detalle/:categoria/:producto/prd/:querys",
    element: <DetalleProducto />,
  },
  {
    path: "/detalle/:categoria/:producto/grp/:querys",
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
  {
    path: "/topman",
    element: <TiendaTop />,
  },
  {
    path: "/topshop",
    element: <TiendaTop />,
  },
]);

function App() {
  return (
    <LoadingContextProvider>
      <DetalleContextProvider>
        <GuardadosContextProvider>
          <CarritoContextProvider>
            <CategoriaContextProvider>
              <ProductosContextProvider>
                <FiltrosFetchContextProvider>
                  <EstilosGlobales />
                  <RouterProvider router={router} />
                </FiltrosFetchContextProvider>
              </ProductosContextProvider>
            </CategoriaContextProvider>
          </CarritoContextProvider>
        </GuardadosContextProvider>
      </DetalleContextProvider>
    </LoadingContextProvider>
  );
}

export default App;
