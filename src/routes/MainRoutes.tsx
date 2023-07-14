import { useRoutes } from "react-router-dom";
import { Countries } from "../pages/Countries";
import { Country } from "../pages/Country";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Countries /> },
    { path: "/country/:name", element: <Country /> },
    { path: "/code/:code", element: <Country /> },
  ]);
};
