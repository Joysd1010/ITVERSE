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
import MyClass from "./Component/MyClass/MyClass";
import CourseDetail from "./Component/Course/CourseDetail";
import Privateroute from "./Component/PrivateRoute/Privateroute";
import FrontPage from "./Component/MyClass/FrontPage";
import Progress from "./Component/MyClass/Student/Progress";
import Mycart from "./Component/MyClass/Student/Mycart";
import Classvideo from "./Component/MyClass/Student/Classvideo";

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
        path: "details/:id",
        element: <CourseDetail />,
        loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`),
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
  {
    path: "mylesson",
    element: <Privateroute><MyClass/></Privateroute>,
    children:[
      {
        path:'/mylesson',
        element: <FrontPage/>
      },
      {
        path:'mylesson/myprogress',
        element: <Progress/>
      },
      {
        path:'mylesson/myclass',
        element: <StudentClass/>,
      },
      {
        path:'mylesson/myCart',
        element: <Mycart/>,
      },

      {
        path: "mylesson/myclass",
        element: <CourseDetail />,
       
      
      },

      {
        path: "mylesson/video/:id",
        element: <Classvideo />,
        loader: ({params}) => fetch(`http://localhost:5000/enroll/${params.id}`),
       
      }
    ]
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
