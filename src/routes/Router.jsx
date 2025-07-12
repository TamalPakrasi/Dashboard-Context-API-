import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Layout from "../Layout.jsx";

export const Router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}></Route>)
);
