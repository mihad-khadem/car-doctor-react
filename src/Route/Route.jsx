import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../Components/Home/About/About";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import CheckOut from "../Components/CheckOut/CheckOut";
import BookService from "../Components/BookService/BookService";
import Bookings from "../Components/Bookings/Bookings";
import PrivateRoute from "./Private/PrivateRoute";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/book/:id',
                element: <PrivateRoute><BookService/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings/></PrivateRoute>
            }
        ]
    }
])

export default Route;