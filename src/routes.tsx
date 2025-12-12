import { createBrowserRouter, RouteObject } from "react-router-dom";
import { RouteAppPath } from "@/constant/RouteConst";
import ProtectedRoute from "@/components/protected-route";
import MainLayout from "@/layouts/MainLayout";
import { DashboardRoutes } from "./features/dashboard";

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: RouteAppPath.Health,
      element: "OK",
    },
    {
      path: RouteAppPath.Root,
      element: <MainLayout children={null} />,
      // element: <ProtectedRoute />,
      children: [...DashboardRoutes],
    },
  ];

  const routers = createBrowserRouter(routes);
  return { routers };
};

export default Routes;
