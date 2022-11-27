import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import AllSeller from "../../pages/Dashboard/AllSeller/AllSeller";
import AllUser from "../../pages/Dashboard/AllUser/AllUser";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../pages/Dashboard/MyOder/MyOrder";
import MyProduct from "../../pages/Dashboard/MyProduct/MyProduct";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRouter><Category></Category></PrivateRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children:[
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/myorder",
                element: <MyOrder></MyOrder>
            },
            {
                path: "/dashboard/myproduct",
                element: <MyProduct></MyProduct>
            },
            {
                path: "/dashboard/allseller",
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: "/dashboard/alluser",
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }
        ]
    }
])