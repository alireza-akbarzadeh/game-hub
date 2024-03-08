import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { GameDetailPage } from "./pages/GameDetailPage";
import { HomePage } from "./pages/HomePage";
import Layout from "./pages/Layout";
import { Callback } from "./pages/Practice/Callback";
import { Reducer } from "./pages/Practice/Reducer";
import { Transition } from "./pages/Practice/Transition";

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
        element: <Transition />,
      },
    ],
  },
]);
