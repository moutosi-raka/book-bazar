import React from 'react';

const ClientCart = ({client}) => {
    const {img, name,review}= client;
    return (
        <div className='px-8'>
        <div className='text-center px-4 ml-4'>
           <img className='rounded-full w-64 h-64 border-8 border-white' src={img} alt="" />
        </div>
        <div className='text-center'>
        <h2 className="text-4xl font-bold dancing">{name}</h2>
        <p>{review}</p>
        </div>
    </div>
    );
};

export default ClientCart;