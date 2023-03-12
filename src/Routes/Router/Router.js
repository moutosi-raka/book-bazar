import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import BookList from "../../pages/BookList/BookList/BookList";
import AllCategory from "../../pages/Category/AllCategory/AllCategory";
import Category from "../../pages/Category/Category";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllSeller from "../../pages/Dashboard/AllSeller/AllSeller";
import AllUser from "../../pages/Dashboard/AllUser/AllUser";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Payment from "../../pages/Dashboard/Dashboard/Payment/Payment";
import MyOrder from "../../pages/Dashboard/MyOder/MyOrder";
import MyProduct from "../../pages/Dashboard/MyProduct/MyProduct";
import ShowReport from "../../pages/Dashboard/ShowReport/ShowReport";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booklist',
                element: <PrivateRouter><BookList></BookList></PrivateRouter>,
                loader: async({params})=> fetch(`http://localhost:5000/category`)
            },
            {
                path: '/category',
                element: <PrivateRouter><AllCategory></AllCategory></PrivateRouter>,
               
            },
            {
                path: '/category/:id',
                element: <PrivateRouter><Category></Category></PrivateRouter>,
                loader: async({params})=> fetch(`https://book-bazar-server-moutosi-raka.vercel.app/category/${params.id}`)
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
        errorElement: <DisplayError></DisplayError>,
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
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: "/dashboard/addproduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/allseller",
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: "/dashboard/show-report",
                element: <AdminRoute><ShowReport></ShowReport></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: async({params})=> fetch(`https://book-bazar-server-moutosi-raka.vercel.app/booking/${params.id}`)
            },
            {
                path: "/dashboard/alluser",
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])