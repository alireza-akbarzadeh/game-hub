import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { GameDetailPage } from "./pages/GameDetailPage";
import { HomePage } from "./pages/HomePage";
import Layout from "./pages/Layout";
import { Callback } from "./pages/Practice/Callback";
import { Reducer } from "./pages/Practice/Reducer";
import { Transition } from "./pages/Practice/Transition";
import { DefferValue } from "./pages/Practice/DefferValue";
import { LayoutEffect } from "./pages/Practice/LayoutEffect";
import { DebugValue } from "./pages/Practice/DebugValue";
import { IndexDB } from "./pages/Practice/IndexDB";
import { CustomHook } from "./pages/Practice/Custome-Hook";

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
    ],
  },
]);
