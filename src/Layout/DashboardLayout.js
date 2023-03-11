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
            
            <div className="drawer drawer-mobile  ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar></Navbar>
                    <div className='px-8 mb-12'><Outlet></Outlet></div>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52  bg-slate-900 text-white pt-20">
                    { dbUser?.role === "buyer" && <li><Link to='/dashboard/myorder'>My Orders</Link></li>}
                    { dbUser?.role === "seller" && <>
                     <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                     </>
                     }
                       { dbUser?.role === "admin" && <>
                       <li><Link to='/dashboard/alluser'>All Buyer</Link></li>
                        <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                        <li><Link to='/dashboard/show-report'>Report</Link></li>
                        </> }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;