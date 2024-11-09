import MainLayout from "@/layout/main.layout";
import MainPage from "@/pages/Landing/MainPage";
import AuthLayout from "@/layout/auth.layout";
import LoginPage from "@/pages/Auth/Login";

export const ROUTES = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      // {
      //   path: "register",
      //   element: <LoginPage />,
      // },
    ],
  },
];
