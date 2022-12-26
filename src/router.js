import { createBrowserRouter } from "react-router-dom";
import AddItems from "./pages/AddItems";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/nxtwaveassignment/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nxtwaveassignment/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nxtwaveassignment/add-items",
    element: <AddItems />,
    errorElement: <ErrorPage />,
  },
]);
