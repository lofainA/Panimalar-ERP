import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import Welcome from "./pages/Welcome/Welcome";
import StudentLogin from "./pages/Student/StudentLogin/StudentLogin";
import StudentDashboard from "./pages/Student/StudentDashboard/StudentDashboard";
import Assignments from "./pages/Student/Assignments/Assignments";
import StudyMaterials from "./pages/Student/StudyMaterials/StudyMaterials";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)