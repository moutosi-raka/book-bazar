import React from 'react';

const ClientCart = ({client}) => {
    const {img, name,review}= client;
    return (
        <div className='px-8 w-96 mx-auto border py-12 bg-primary rounded-lg  text-white'>
        <div className='text-center flex justify-center'>
           <img className='rounded-full w-40 h-40 border-8 border-secondary' src={img} alt="" />
        </div>
        <div className='text-center'>
        <h2 className="text-4xl font-bold dancing">{name}</h2>
        <p>{review}</p>
        </div>
    </div>
    );
};

export default ClientCart;