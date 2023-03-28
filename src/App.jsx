import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import ListadoProductos from "./pages/ListadoProductos";
import DetalleProducto from "./pages/DetalleProducto";
import EstilosGlobales from "./styles/EstilosGlobales";
import { ProductosContextProvider } from "./context/ProductosContext";
import { CategoriaContextProvider } from "./context/IdCategoriaContext";

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
]);

function App() {
  return (
    <>
      <CategoriaContextProvider>
        <ProductosContextProvider>
          <EstilosGlobales />
          <RouterProvider router={router} />
        </ProductosContextProvider>
      </CategoriaContextProvider>
    </>
  );
}

export default App;
