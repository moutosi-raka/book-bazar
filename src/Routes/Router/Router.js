import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Category from "../../pages/Category/Category";
import AllUser from "../../pages/Dashboard/AllUser/AllUser";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../pages/Dashboard/MyOder/MyOrder";
import MyProduct from "../../pages/Dashboard/MyProduct/MyProduct";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";

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
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
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
                path: "/dashboard/alluser",
                element: <AllUser></AllUser>
            }
        ]
    }
])