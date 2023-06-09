
import React from 'react';
import AdvertiseCart from './AdvertiseCart';

const Advertise = ({adsItems}) => {


     
    return (
        <div className='my-12 w-11/12 mx-auto'>
           <h1 className='my-12 text-2xl md:text-3xl text-center text-linear font-bold'>Advertise Product</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
           '>
             {
                adsItems.map(item => <AdvertiseCart
                item={item}
                key={item._id}
                ></AdvertiseCart>)
             }
           </div>
        </div>
    );
};

export default Advertise;