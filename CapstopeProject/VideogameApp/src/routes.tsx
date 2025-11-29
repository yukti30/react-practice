import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Homepage } from "./pages/Homepage";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      { path: "games/:id", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);

export default router;
