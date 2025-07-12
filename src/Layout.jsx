import { useState } from "react";
import { AuthContext } from "./contexts/Auth.context.js";
import { Navbar } from "./components";
import { Outlet } from "react-router";

function Layout() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  return (
    <AuthContext value={{ isAuthenticate, setIsAuthenticate }}>
      <Navbar />
      <Outlet />
    </AuthContext>
  );
}

export default Layout;
