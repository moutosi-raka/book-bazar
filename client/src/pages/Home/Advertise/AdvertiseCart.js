import React from 'react';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";
import { WiTime3 } from "react-icons/wi";
import './AdvertiseCart.css'

const AdvertiseCart = ({item}) => {
    const {img, book_name,_id, resale_price, Year_of_use, book_condition} = item;
    return (
        // <div className="card bg-base-100 shadow-xl w-60 image-full">
        //     <figure><img src={img} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Book Name: {book_name}</h2>
        //         <p>Sale Price: {resale_price}</p>
        //         <p>{Year_of_use} used & condition is {book_condition} </p>
        //         <button className='btn btn-primary text-white'><Link to={`/bookDetails/${_id}`}>See details</Link></button>
        //     </div>
        // </div>
        <div className="advertiseCard">        
                <img src={img} alt="" className="" />
            <div className="advertiseCard-body">
              
                <h3 className="text-base font-semibold  mb-3">{book_name}</h3>
               <div className='flex justify-between'>
                <p className='text-xs text-base-300' ><TbCurrencyTaka className='inline'/>{resale_price}</p>
               </div>
                <div className='text-xs text-base-300 mb-8'>
                <p className="leading-snug dark:text-gray-400"><WiTime3 className='inline mr-1'/>{Year_of_use}</p>
                <p>Condition {book_condition}</p>
                </div>
                <button className='card-btn'><Link to={`/bookDetails/${_id}`}>See details</Link></button>
               
            </div>
    </div>
    );
};

export default AdvertiseCart;