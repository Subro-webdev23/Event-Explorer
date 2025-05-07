import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import EventDetails from "../Component/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CreatEvent from "../Pages/CreatEvent/CreatEvent";
import SelectCetagory from "../Pages/SelectCetagory/SelectCetagory";
import ForgetPassword from "../Component/ForgetPassword/ForgetPassword";
import Pricing from "../Pages/Pricing/Pricing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                loader: () => fetch("/event-explorer.json"),
                element: <Home></Home>
            },
            {
                path: "/creatEvent",
                element: <PrivateRoute>
                    <CreatEvent></CreatEvent>
                </PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: "/details/:id",
                loader: () => fetch("/event-explorer.json"),
                element: <PrivateRoute>
                    <EventDetails></EventDetails>
                </PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/selectCetagory/:cetagory",
                loader: () => fetch("/event-explorer.json"),
                element: <PrivateRoute>
                    <SelectCetagory></SelectCetagory>
                </PrivateRoute>
            },
            {
                path: "/forget",
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: "/pricing",
                element: <PrivateRoute>
                    <Pricing></Pricing>
                </PrivateRoute>
            }

        ]
    },

]);