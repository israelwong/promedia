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
import Login from "./admin/login.jsx";
import NotFound from "./notFound.jsx";

import { AuthContextProvider } from "./auth/AuthContext.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import Dashboard from "./admin/dashboard.jsx";
import Layout from "./components/Layout.jsx";

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
        path: "/admin/",
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
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  </AuthContextProvider>
  // </React.StrictMode>
);
