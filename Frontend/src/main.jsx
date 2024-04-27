import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Homepage";
import ChooseUser from "./components/pages/chooseUser";
import Login from "./components/pages/Login";
import About from "./components/pages/about";
import Courses from "./components/pages/courses";
import Contact from "./components/pages/contact";
import Verify from "./components/pages/verify";
import StudentDashboard from "./components/pages/studentDashboard";
import CheckStatus from "./components/pages/checkStatus";
import SubmitVerify from "./components/pages/submitVerification";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/chooseuser",
    element: <ChooseUser />,
  },

  {
    path: "/adminlogin",
    element: <Login role={"Admin"} />,
  },

  {
    path: "/studentlogin",
    element: <Login role={"Student"} />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/courses",
    element: <Courses />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/verify",
    element: <Verify />,
  },

  {
    path: "/studentDashboard",
    element: <StudentDashboard />,
  },

  {
    path: "/checkstatus",
    element: <CheckStatus/>,
  },

  {
    path: "/submitverify",
    element: <SubmitVerify/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
