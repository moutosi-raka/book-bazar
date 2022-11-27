import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin] = useAdmin(user?.email);

    if(loading){
        return <div className='h-[400px] flex justify-center items-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default AdminRoute;