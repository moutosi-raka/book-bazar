import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useUser from '../hooks/useUser/useUser';
import Loading from '../pages/Loading/Loading';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [dbUser, isLoading] = useUser(user.email)

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile  ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 lg:bg-gray-50 text-base-content">
                    { dbUser?.role === "buyer" && <li><Link to='/dashboard/myorder'>My Orders</Link></li>}
                    { dbUser?.role === "seller" && <>
                     <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                     <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                     </>
                     }
                       { dbUser?.role === "admin" && <>
                       <li><Link to='/dashboard/alluser'>All Buyer</Link></li>
                        <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                        </> }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;