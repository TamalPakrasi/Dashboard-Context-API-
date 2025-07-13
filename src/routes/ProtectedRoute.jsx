import React from "react";
import useAuth from "../contexts/Auth.context.js";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const { isAuthenticate } = useAuth();

  return isAuthenticate ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
