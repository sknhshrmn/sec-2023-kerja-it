import {
  RouterProvider,
  createBrowserRouter,
  // BrowserRouter,
  // Routes,
  // Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
// import ScrollToTop from "./components/ScrollToTop";
// import { BASEURL } from "./constant/config";

function App() {
  const router = createBrowserRouter([
    {
      path: "/sec-2023-react-js-kerja-it",
      element: <Home />,
    },
    {
      path: "/sec-2023-react-js-kerja-it" + "/job/:id",
      element: <Job />,
    },
  ]);

  // return (
  //   <BrowserRouter basename="https://sknhshrmn.github.io/sec-2023-react-js-kerja-it">
  //     <ScrollToTop />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/job/:id" element={<Job />} />
  //     </Routes>
  //   </BrowserRouter>
  // );

  return <RouterProvider router={router} />;
}

export default App;
