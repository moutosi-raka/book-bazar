import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useUser from '../../hooks/useUser/useUser';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [dbUser, isLoading] = useUser(user?.email);

    if(loading || isLoading){
        return <div className='h-[400px] flex justify-center items-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
    }
    if(user && dbUser.role === 'seller'){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default SellerRoute;