import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@pages/error";
import { LoginPage } from "@pages/login";
import { RegisterPage } from "@pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
