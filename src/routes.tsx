import { createBrowserRouter } from "react-router-dom";
import { CustomHook } from "./hub/Custome-Hook";
import { Review } from "./pages";
import ErrorPage from "./pages/ErrorPage";
import { GameDetailPage } from "./pages/GameDetailPage";
import { HomePage } from "./pages/HomePage";
import Layout from "./pages/Layout";
import { Recursive } from "./hub/page/Recursive";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        element: <GameDetailPage />,
      },
      {
        path: "practice",
        element: <CustomHook />,
      },
      {
        path: "recursive",
        element: <Recursive />,
      },
    ],
  },
]);
