import {
  RouterProvider,
  createHashRouter,
  // BrowserRouter,
  // Routes,
  // Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
// import ScrollToTop from "./components/ScrollToTop";
// import { BASEURL } from "./constant/config";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/job/:id",
      element: <Job />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
