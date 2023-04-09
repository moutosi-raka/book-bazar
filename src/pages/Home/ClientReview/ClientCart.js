import React from 'react';

const ClientCart = ({client}) => {
    const {img, name,review}= client;
    return (
        <div className='px-8 w-[15rem] md:w-96 mx-auto border py-12 bg-slate-900 rounded-lg  text-white'>
        <div className='text-center flex justify-center'>
           <img className='rounded-full w-32 h-32 border-4 border-white' src={img} alt="" />
        </div>
        <div className='text-center'>
        <h2 className="text-2xl font-bold dancing">{name}</h2>
        <p className='text-sm'>{review}</p>
        </div>
    </div>
    );
};

export default ClientCart;