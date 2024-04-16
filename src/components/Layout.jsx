import { Outlet } from "react-router-dom";
import MainMenu from "./MainMenu.jsx";
import MainFooter from "./MainFooter.jsx";
import { NextUIProvider } from "@nextui-org/react";

function Layout() {
  return (
    <>
      <NextUIProvider>
        <MainMenu />
        <Outlet />
        <MainFooter />
      </NextUIProvider>
    </>
  );
}

export default Layout;
