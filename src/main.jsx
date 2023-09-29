import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Component/LayOut/Layout";
import Home from "./Component/Home/Home";
import Courses from "./Component/Course/Courses";
import Instructor from "./Component/InStructors/Instructors";
import StudentClass from "./Component/MyClass/Student/StudentClass";
import Error from "./Component/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
    element: <Home/>
      },
      {
        path: "instructor",
    element: <Instructor/>
      },
      {
        path: "Class",
    element: <StudentClass/>
      },
      {
        path: "course",
    element: <Courses/>
      }
      ,{
        path:"*",
        element:<Error/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);