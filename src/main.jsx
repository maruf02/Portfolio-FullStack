import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import AboutPage from "./Components/AboutPage/AboutPage";
import SkillsPage from "./Components/SkillsPage/SkillsPage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ProjectLiveShow from "./Components/ProjectLiveShow/ProjectLiveShow";
import BlogPage from "./Components/BlogPage/BlogPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/Skills",
        element: <SkillsPage></SkillsPage>,
      },
      {
        path: "/Blogs",
        element: <BlogPage></BlogPage>,
      },
      // {
      //   path: "/Services",
      //   element: <ServicesPage></ServicesPage>,
      // },
      {
        path: "/Projects",
        element: <ProjectPage></ProjectPage>,
      },
      {
        path: "/Contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/Projects/:id",
        element: <ProjectLiveShow></ProjectLiveShow>,
        loader: () =>
          fetch(
            "https://maruf02.github.io/Asset-Json-Img-dont-delete/Projects.json"
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
