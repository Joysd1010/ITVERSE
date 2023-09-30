import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Component/LayOut/Layout";
import Home from "./Component/Home/Home";
import Courses from "./Component/Course/Courses";
import Instructor from "./Component/InStructors/Instructors";
import StudentClass from "./Component/MyClass/Student/StudentClass";
import Error from "./Component/Error/Error";
import Signup from "./Component/LOGIN/Signup/Signup";
import Login from "./Component/LOGIN/Login/Login";
import AuthProvider from "./Component/Provider/Authprovider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/course"),
      },
      {
        path: "instructor",
        element: <Instructor />,
        loader: () => fetch("http://localhost:5000/course"),
      },
      {
        path: "Class",
        element: <StudentClass />,
      },
      {
        path: "course",
        element: <Courses />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
