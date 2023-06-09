import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1 className='text-xl md:text-3xl text-center mt-20 text-white'>Welcome , <span className='font-bold text-primary uppercase'>{user?.displayName}</span></h1>
        </div>
    );
};

export default Dashboard;