import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes";

function App() {
  const { routers } = appRoutes();
  return <RouterProvider router={routers} />;
}

export default App;
