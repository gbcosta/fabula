import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@pages/error";
import { LoginPage } from "@pages/login";
import { RegisterPage } from "@pages/register";
import { EditorPage } from "@pages/editor";

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
  {
    path: "/editor",
    element: <EditorPage />,
  },
]);
