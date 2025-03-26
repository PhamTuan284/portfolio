import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home-page/HomePage";
import NotfoundPage from "./pages/not-found-page/NotFoundPage";
import WorkPage from "./pages/work/WorkPage";
import AboutMePage from "./pages/about-me-page/AboutMePage";
import TestPage from "./pages/test/TestPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotfoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-me",
        element: <AboutMePage />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={appRouter} />;
}
