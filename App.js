import React, { lazy, Suspense } from "react";
import CondRendering from "./src/Components/CondRendering";
import Mapping from "./src/Components/Mapping";
import LoginClassBased from "./src/Components/LoginClassBased";
import ImageGen from "./src/Components/ImageGen";
import Header from "./src/Components/Header";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Body from "./src/Components/Body";
//import About from "./src/Components/About";
import Products from "./src/Components/Products";
import Contact from "./src/Components/Contact";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <CondRendering /> */}
      {/* <Mapping /> */}
      {/* <ImageGen />  */}
      {/* <LoginClassBased /> */}
    </div>
  );
};

const About = lazy(() => import("./src/Components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <StrictMode>
  <RouterProvider router={appRouter} />
  // </StrictMode>
);
