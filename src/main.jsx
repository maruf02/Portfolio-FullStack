import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import AboutPage from "./Components/AboutPage/AboutPage";
import SkillsPage from "./Components/SkillsPage/SkillsPage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ProjectLiveShow from "./Components/ProjectLiveShow/ProjectLiveShow";
import BlogPage from "./Components/BlogPage/BlogPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Redux/store";
import LoginPage from "./DashBoard/LoginPage/LoginPage";
import AdminHomePage from "./DashBoard/AdminHomePage/AdminHomePage";
import ManageSkill from "./DashBoard/AdminHomePage/ManageSkill/ManageSkill";
import ManageProject from "./DashBoard/AdminHomePage/ManageProject/ManageProject";
import ManageBlog from "./DashBoard/AdminHomePage/ManageBlog/ManageBlog";
import ProjectDetailsPage from "./Components/ProjectDetailsPage/ProjectDetailsPage";
import BlogDetailsPage from "./Components/BlogDetailsPage/BlogDetailsPage";
import AdminProtectRoute from "./DashBoard/AdminProtectRoute/AdminProtectRoute";
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
        element: <ProjectDetailsPage></ProjectDetailsPage>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetailsPage></BlogDetailsPage>,
      },
      // {
      //   path: "/Projects/:id",
      //   element: <ProjectLiveShow></ProjectLiveShow>,
      //   loader: () =>
      //     fetch(
      //       "https://maruf02.github.io/Asset-Json-Img-dont-delete/Projects.json"
      //     ),
      // },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/admin",
        element: (
          <AdminProtectRoute>
            <AdminHomePage></AdminHomePage>
          </AdminProtectRoute>
        ),
      },
      {
        path: "/ManageSkill",
        element: (
          <AdminProtectRoute>
            <ManageSkill></ManageSkill>
          </AdminProtectRoute>
        ),
      },
      {
        path: "/ManageProject",
        element: (
          <AdminProtectRoute>
            <ManageProject></ManageProject>
          </AdminProtectRoute>
        ),
      },
      {
        path: "/ManageBlog",
        element: (
          <AdminProtectRoute>
            <ManageBlog></ManageBlog>
          </AdminProtectRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
