import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayoutPage_83,
  HomePage_83,
  BlogStaticPage_83,
  BlogLocalJsonPage_83,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutPage_83 />,
    children: [
      {
        index: true,
        element: <HomePage_83 />,
      },
      {
        path: "static_83",
        element: <BlogStaticPage_83 />,
      },
      {
        path: "localjson_83",
        element: <BlogLocalJsonPage_83 />,
      },
    ],
  },
]);

const App_83 = () => {
  return <RouterProvider router={router} />;
};

export default App_83;
