import DashboardView from "./views/DashboardView";
import { RouteAppPath } from "@/constant/RouteConst";

export const DashboardRoutes = [
  {
    path: RouteAppPath.Dashboard,
    handle: { breadcrumb: "Dashboard" },
    children: [
      {
        path: "",
        element: <DashboardView />,
      },
    ],
  },
];
