import { Suspense, useState } from "react";
import { AuthContextProvider } from "./contexts/Auth.context.js";
import { Outlet } from "react-router";
import { Loading, Navbar } from "./components";

function Layout() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  return (
    <AuthContextProvider value={{ isAuthenticate, setIsAuthenticate }}>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </AuthContextProvider>
  );
}

export default Layout;
