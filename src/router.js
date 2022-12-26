import { createBrowserRouter } from "react-router-dom";
import AddItems from "./pages/AddItems";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add-items",
    element: <AddItems />,
    errorElement: <ErrorPage />,
  },
]);
