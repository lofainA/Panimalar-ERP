import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import "./index.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";

import Welcome from "./pages/Welcome/Welcome";

import StudentLogin from "./pages/Student/StudentLogin/StudentLogin";
import FacultyLogin from "./pages/Faculty/FacultyLogin/FacultyLogin";

import StudentDashboard from "./pages/Student/StudentDashboard/StudentDashboard";
import Assignments from "./pages/Student/Assignments/Assignments";
import StudyMaterials from "./pages/Student/StudyMaterials/StudyMaterials";
import Notifications from "./pages/Student/Notifications/Notifications";

import FacultyDashboard from "./pages/Faculty/FacultyDashboard/FacultyDashbaord";
import Attendance from "./pages/Faculty/Attendance/Attendance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/student-login",
    element: <StudentLogin />,
  },
  {
    path: "/faculty-login",
    element: <FacultyLogin />,
  },
  {
    path: "/student-dashboard",
    element: <StudentDashboard />,
  },
  {
    path: "/assignments",
    element: <Assignments />,
  },
  {
    path: "/study-materials",
    element: <StudyMaterials />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
  {
    path: "/faculty-dashboard",
    element: <FacultyDashboard />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)