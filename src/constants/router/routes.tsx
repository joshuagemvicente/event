import MainLayout from "@/layout/main.layout";
import MainPage from "@/pages/Landing/MainPage";

export const ROUTES = [
  {
    path: "/",
    element: <MainLayout />,
    // element: <MainPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
];
