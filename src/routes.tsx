import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { GameDetailPage } from "./pages/GameDetailPage";
import { HomePage } from "./pages/HomePage";
import Layout from "./pages/Layout";
import { Callback } from "./hub/Callback";
import { Reducer } from "./hub/Reducer";
import { Transition } from "./hub/Transition";
import { DefferValue } from "./hub/DefferValue";
import { LayoutEffect } from "./hub/LayoutEffect";
import { DebugValue } from "./hub/DebugValue";
import { IndexDB } from "./hub/IndexDB";
import { CustomHook } from "./hub/Custome-Hook";
import { Review } from "./pages";

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
        path: "review",
        element: <Review />,
      },
    ],
  },
]);
