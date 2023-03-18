import PaginaPrincipal from "./pages/PaginaPrincipal";
import EstilosGlobales from "./styles/EstilosGlobales";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListadoProductos from "./pages/ListadoProductos";

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
    path: "/productos/:genero/:categoria1/:categoria2/cat/:idCategoria",
    element: <ListadoProductos />,
  },
]);

function App() {
  return (
    <>
      <EstilosGlobales />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
