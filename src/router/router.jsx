import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RootLayout from "../layout/RootLayout";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoute from "./PrivateRoute";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import PostedJobDetailsView from "../pages/PostedJobDetailsView/PostedJobDetailsView";
import SpecificJobApplicationList from "../pages/PostedJobDetailsView/SpecificJobApplicationList";


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
                path: "/login", 
                element: <Login />
            },
            {
                path: "/register", 
                element: <Register />
            },
            {
                path: "/jobs/:id",
                element: <JobDetails  />
            },
            {
                path: "/myApplications",
                element: <PrivateRoute><MyApplications /></PrivateRoute>
            },
            {
                path: "/mypostedjobs",
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: "/postedJobDetails/:id",
                element: <PrivateRoute><PostedJobDetailsView /></PrivateRoute>
            },
            {
                path: "/addjob",
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: "/jobApply/:id",
                element: <PrivateRoute><JobApply /></PrivateRoute>
            },
            {
                path: "/applications/jobs/:job_id",
                element: <PrivateRoute><SpecificJobApplicationList /></PrivateRoute>
            },
        ]
    },
]);

export default router;