import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Layout from "../Layout.jsx";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home.jsx"));

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
    </Route>
  )
);
