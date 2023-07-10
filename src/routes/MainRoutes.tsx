import { useRoutes } from "react-router-dom";
import { Countries } from "../pages/Countries/Countries";
import { Country } from "../pages/Country";
import React from "react";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Countries /> },
    { path: "/country/:name", element: <Country /> },
    { path: "/code/:code", element: <Country /> },
  ]);
};
