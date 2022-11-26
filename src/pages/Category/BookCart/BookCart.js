import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButtom from '../../../Components/PrimaryButton/PrimaryButtom';

const BookCart = ({ category , setBookProduct}) => {
    const {img, book_name, resale_price, original_price, location, Year_of_use } = category;
    return (
        <div className="max-w-lg p-4 drop-shadow-lg border-4 rounded-lg bg-white">
        <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
                <p className="mb-0 capitalize ">Seller name</p>
            </div>
          
        </div>
        <div className="space-y-4">
            <div className="flex items-center justify-center">
                <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            </div>
            <div className="space-y-2">
              
                <h3 className="text-xl font-semibold ">Book Name: {book_name}</h3>
                <p className='text-black'>Original Price: {original_price}</p>
                <p className='text-black'>Sell Price: {resale_price}</p>
                <p className='text-black'>Location: {location}</p>
                <p className="leading-snug dark:text-gray-400">{Year_of_use} used</p>

               
               <div className='flex justify-between my-5 '>
                    <PrimaryButtom><label 
                    htmlFor="booking-modal" 
                    onClick={()=> setBookProduct(category)}
                    >Book Now</label></PrimaryButtom>
                    
                    <button className='btn btn-link'>Report</button>
                </div>
            </div>
        </div>
    </div>

    );
};

export default BookCart;