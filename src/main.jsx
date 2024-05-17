import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@fontsource/roboto";
import "@fontsource/bebas-neue";
import "./index.css";

//! PUBLIC ROUTES
import Home from "./pages/home.jsx";
import Nosotros from "./pages/nosotros.jsx";
import Portafolio from "./pages/portafolio.jsx";
import Servicios from "./pages/servicios.jsx";
import Contacto from "./pages/contacto.jsx";
import Casos from "./pages/casos.jsx";
import Login from "./dashboard/login.jsx";
import NotFound from "./notFound.jsx";

import { AuthContextProvider } from "./auth/AuthContext.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import DashboardPrincipal from "./dashboard/principal.jsx";
import Layout from "./components/Layout.jsx";

import Configuracion from "./dashboard/configuracion.jsx";
import Prospectos from "./dashboard/prospectos.jsx";
import Contabilidad from "./dashboard/contabilidad.jsx";
import Proyectos from "./dashboard/proyectos.jsx";
import ConfiguracionServicios from "./dashboard/configuracion.servicios.jsx";
import ConfiguracionColaboradores from "./dashboard/configuracion.colaboradores.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/nosotros",
        element: <Nosotros />,
        errorElement: <NotFound />,
      },
      {
        path: "/portafolio",
        element: <Portafolio />,
        errorElement: <NotFound />,
      },
      {
        path: "/servicios",
        element: <Servicios />,
        errorElement: <NotFound />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
        errorElement: <NotFound />,
      },
      {
        path: "/casos",
        element: <Casos />,
        errorElement: <notFound />,
      },
      {
        path: "/dashboard/",
        element: <Login />,
        errorElement: <notFound />,
      },
    ],
  },
  //!PROTECTED ROUTES
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard/principal",
        element: <DashboardPrincipal />,
      },
      {
        path: "/dashboard/configuracion",
        element: <Configuracion />,
      },
      {
        path: "/dashboard/configuracion/servicios",
        element: <ConfiguracionServicios />,
      },
      {
        path: "/dashboard/configuracion/colaboradores",
        element: <ConfiguracionColaboradores />,
      },
      {
        path: "/dashboard/contabilidad",
        element: <Contabilidad />,
      },
      {
        path: "/dashboard/prospectos",
        element: <Prospectos />,
      },
      {
        path: "/dashboard/proyectos",
        element: <Proyectos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthContextProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </AuthContextProvider>
  </>
);
