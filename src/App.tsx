import {
  RouterProvider,
  createHashRouter,
  // BrowserRouter,
  // Routes,
  // Route,
} from "react-router-dom";
import Home from "./pages/Home";
// import ScrollToTop from "./components/ScrollToTop";
// import { BASEURL } from "./constant/config";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
