import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RootLayout from "../layout/RootLayout";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <h2>Route Not found</h2>,
        children: [
            {
                index: true,
                element: <Home /> 
            },
            {
                path: "login", 
                element: <Login />
            },
            {
                path: "register", 
                element: <Register />
            },
            {
                path: "/jobs/:id",
                element: <JobDetails  />
            },
            {
                path: "/jobApply/:id",
                element: <PrivateRoute><JobApply /></PrivateRoute>
            }
        ]
    },
]);

export default router;