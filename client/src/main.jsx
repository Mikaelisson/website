import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page/error-page";
import Admin from "./components/admin/Admin";
import PrivateRoute from "./components/private/privateRoute";
import ContainerContext from "./components/private/ContainerContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <ContainerContext />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "dashboard",
            element: <PrivateRoute />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
