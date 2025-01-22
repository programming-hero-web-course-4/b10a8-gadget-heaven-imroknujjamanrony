import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainlayout/MainLayout";
import Home from "../pages/Home";
import Statistic from "../pages/Statistic";
import Dashboard from "../pages/Dashboard";
import DataCards from "../components/DataCards";
import ItemDetails from "../components/ItemDetails";
import Error from "../components/Error";
import About from "../pages/About";
// import Banner from "../components/Banner";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/categories.json"),
        children: [
          {
            path: "/",
            element: <DataCards></DataCards>,
            loader: () => fetch("/public/gadget.json"),
          },

          {
            path: "/category/:category",
            element: <DataCards></DataCards>,
            loader: () => fetch("/public/gadget.json"),
          },
        ],
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/item/:id",
        element: <ItemDetails></ItemDetails>,
        loader: () => fetch("/public/gadget.json"),
      },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default routes;
