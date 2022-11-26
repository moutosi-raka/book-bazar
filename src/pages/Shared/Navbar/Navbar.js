import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Navbar.css'

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
   const handleLogOut = ()=>{
    logOut()
    .then( ()=>{})
    .catch(err => console.log(err));
   }
  const menuItems = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/blog'>Blog</Link></li>
  
  { user?.uid 
   ? 
   <>
   <li><Link to='/dashboard'>Dashboard</Link></li>
   <li><button onClick={handleLogOut} className='btn btn-outline'>Log out</button></li>
   </>
   : <li><Link to='/login'>Login</Link></li>
   }
  </>
  return (
    <div>
      <h1 className="display-1  text-center py-8 "><Link className='text-decoration-none text-7xl f-family-abril' to='/'>Book Bazar</Link></h1>
      <div className="navbar  border-4 border-l-0 border-r-0 position-sticky">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Book Bazar</Link>
        </div>
        <div className=" hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal p-0">
           {menuItems}
          </ul>
        </div>
      
        <label
        htmlFor="dashboard-drawer" 
        tabIndex={3} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
      </div>
    </div>
  );
};

export default Navbar;