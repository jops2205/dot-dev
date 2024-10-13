import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Explore } from "../pages/Explore";
import { MarkdownRenderer } from "../components/MarkdownRenderer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/guide/:slug",
        element: <MarkdownRenderer />
      },
    ],
  },
]);
