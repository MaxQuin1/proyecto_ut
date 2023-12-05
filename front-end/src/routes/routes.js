import { createBrowserRouter } from "react-router-dom";
import 'boxicons'
import Inicio from "../pages/Inicio";

export const rutas = createBrowserRouter([
  {
    path: "/",
    element: < Inicio/>,
  },
]);
