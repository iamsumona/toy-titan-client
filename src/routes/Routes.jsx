import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import LatestArticle from "../Latest Article/LatestArticle";
import Alltoys from "../pages/All toys/Alltoys";
import Mytoys from "../pages/My toys/Mytoys";

import Addatoy from "../pages/Add a toy/Addatoy";
import Toydetails from "../pages/Toy details/Toydetails";
import Catagory from "../pages/Catagory/Catagory";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      // {
      //   path: "/",
      //   element: <LatestArticle></LatestArticle>
      // },
      // {
      //   path: "/",
      //   element: <Catagory></Catagory>
      // },
      {
        path: "alltoys",
        element: <Alltoys></Alltoys>
      },
      {
        path: "alltoys/:id",
        element: <PrivateRoute><Toydetails></Toydetails></PrivateRoute>,
        loader: (({ params }) => fetch(`http://localhost:5173/alltoys/${params.id}`))
      },
      {
        path: "mytoys",
        element: <Mytoys></Mytoys>
      },
      {
        path: "mytoys/:id",
        element: <UpdateToy></UpdateToy>,
        loader: (({ params }) => fetch(`http://localhost:5173/mytoys/${params.id}`))
      },
      {
        path: "addatoy",
        element: <Addatoy></Addatoy>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },

      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]


  },

]);

export default router;