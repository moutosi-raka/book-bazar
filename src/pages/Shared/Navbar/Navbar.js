import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Navbar.css'
import profile from '../../../assets/client/profile.jpg';
import { HiTemplate } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const {pathname} = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err));
  }
  const menuItems = <>
    <li className='px-6 py-2 hover:text-black  mr-2 hover:bg-slate-200 rounded'><Link to='/'>Home</Link></li>
    <li className='px-6 py-2 hover:text-black  mr-2 hover:bg-slate-200 rounded'><Link to='/category'>Category list</Link></li>
    <li className='px-6 py-2 hover:text-black  mr-2 hover:bg-slate-200 rounded'><Link to='/booklist'>Book List</Link></li>
   



    {user?.uid
      ?
      <>
      </>
      : <li className='px-6 py-2 mr-2  rounded'><Link to='/login'>Login</Link></li>
    }
  </>
  return (
   <div>
     <div className='px-12  bg-slate-900 text-white'>
     
      <div className="navbar position-sticky justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
              {menuItems}
           
            </ul>
          </div>
          <h1 className=""><Link className='text-decoration-none text-2xl f-family-abril text-linear' to='/'>Book Bazar</Link></h1> 
          
        </div>
        <div className=" hidden lg:flex navbar-end">
          <ul className="menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div title={user?.displayName} className='navber-end'>
        {
              user?.uid ?
              <div className="dropdown dropdown-end">
              <label tabIndex={4} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {
                    user.photoURL? 
                    <img src={user?.photoURL} alt="" />
                    :
                    <img src={profile} alt="" />
                  }
                  
                </div>
              </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow  menu-compact dropdown-content bg-base-100 rounded-box w-52 absolute z-20 text-black">
                <li>
                  <Link to='/dashboard' className="justify-between">
                  <button  className='p-3 hover:bg-slate-200 rounded w-full text-left'>
                  Dashboard
                  </button>
                  </Link>  
                </li>
                <li>
                  <Link onClick={handleLogOut} className=''>
                    <button className='p-3 hover:bg-slate-200 rounded w-full text-left'>
                     Log out
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            : 
            <></>
            }
      
    { pathname.includes("dashboard") &&  <label
          htmlFor="dashboard-drawer"
          tabIndex={3} className="btn btn-ghost lg:hidden flex justify-end">
         <HiTemplate className='text-2xl'></HiTemplate>
        </label>}
     {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
      </div>
    </div>
    </div>
   </div>
  );
};

export default Navbar;