import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-1/2 pt-36 mx-auto text-center h-screen'>
            <h1 className='lg:text-9xl text-4xl font-extrabold text-red-700'>404</h1>
            <h2 className='text-2xl'>Page Not Found</h2>
            <p>Go Back<Link to='/' className='back-home'><button className='btn btn-link'>Home</button></Link></p>
        </div>
    );
};

export default NotFound;