import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import BlogDetails from "pages/BlogDetails";
import ContactUs from "pages/ContactUs";
import BloggerDetails from "pages/BloggerDetails";
import BlogPostsSevenPage from "pages/BlogPostsSeven";
import Blog from "pages/Blog";
import User from "pages/User";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "blogdetails",
      element: <BlogDetails />,
    },
    {
      path: "contactus",
      element: <ContactUs />,
    },
    {
      path: "bloggerdetails",
      element: <BloggerDetails />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "user",
      element: <User />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
