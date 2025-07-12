import { useState } from "react";
import { AuthContext } from "./contexts/Auth.context.js";

function Layout() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  return (
    <AuthContext value={{ isAuthenticate }}>
      <h1>Hello</h1>
    </AuthContext>
  );
}

export default Layout;
