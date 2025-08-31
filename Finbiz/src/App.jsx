import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/services",
    element: <Service />
  },

  {
    path: "/contact",
    element: <Contact />
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
