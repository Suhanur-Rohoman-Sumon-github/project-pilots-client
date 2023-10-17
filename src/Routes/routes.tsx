import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Features from "../Pages/Features/Features";
import Login from "../Pages/Login-And-Sinup/Login/Login";
import Register from "../Pages/Login-And-Sinup/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sinup",
        element: <Register />,
      },
    ],
  },
]);

export default router;
