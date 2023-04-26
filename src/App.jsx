import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import ListadoProductos from "./pages/ListadoProductos";
import DetalleProducto from "./pages/DetalleProducto";
import EstilosGlobales from "./styles/EstilosGlobales";
import { GuardadosContextProvider } from "./context/GuardadosContext";
import ProductosGuardados from "./pages/ProductosGuardados";
import { CarritoContextProvider } from "./context/CarritoContext";
import CarritoProductos from "./pages/CarritoProductos";
import LoginUsuario from "./pages/LoginUsuario";
import RegistroUsuario from "./pages/RegistroUsuario";
import { FiltrosFetchContextProvider } from "./context/FiltrosFetchContext";
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
    path: "/productos/topman",
    element: <TiendaTop />,
  },
  {
    path: "/productos/topshop",
    element: <TiendaTop />,
  },
]);

function App() {
  return (
    <LoadingContextProvider>
      <GuardadosContextProvider>
        <CarritoContextProvider>
          <FiltrosFetchContextProvider>
            <EstilosGlobales />
            <RouterProvider router={router} />
          </FiltrosFetchContextProvider>
        </CarritoContextProvider>
      </GuardadosContextProvider>
    </LoadingContextProvider>
  );
}

export default App;
