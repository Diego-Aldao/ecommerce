import PaginaPrincipal from "./pages/PaginaPrincipal";
import EstilosGlobales from "./styles/EstilosGlobales";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
