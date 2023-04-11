import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";
import { MdPhoneAndroid , MdEmail} from "react-icons/md";
import book from '../../assets/banner/book-catroon.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BookDetails = () => {
    
    const {setBookProduct, setReportProduct} = useContext(AuthContext);
    const bookDetails = useLoaderData();
    const { img,  book_name, resale_price, original_price, location, Year_of_use, sellerName, description, phone, book_condition, author_name, sellerEmail } = bookDetails;
    
   
    return (
        <div>
            <div className="hero banner px-12">
                <div className="hero-content flex-col lg:flex-row-reverse w-[60%] ">
                    <img src={book} alt='' className="hidden lg:block w-32 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className='mt-8 text-3xl font-bold text-center text-linear'>{book_name}</h1>
                        <p className='text-right text-slate-400'>{author_name ? author_name : 'Unknown'} (Author) </p>
                    </div>
                </div>
            </div>

            <div className='px-3 md:px-12 my-8 grid grid-cols-1 lg:grid-cols-3'>
                <div className='p-4'>
                <img src={img} alt='' className="hidden lg:block h-72 border-slate-400 border-8" />
                </div>
                <div className='px-2 md:px-8 lg:col-span-2 text-slate-300 text-sm md:text-base'>
                    <p ><span className='font-serif font-semibold border-slate-500'>Post by: </span><span className='uppercase'>{sellerName}</span></p>
                    <p><span className='font-serif font-semibold border-slate-500'>Original Price: </span> <TbCurrencyTaka className='inline'/>{original_price}</p>
                    <p> <span className='font-serif font-semibold border-slate-500'>Selling Price: </span><TbCurrencyTaka  className='inline'/>{resale_price}</p>
                    <p> <span className='font-serif font-semibold border-slate-500'>Pickup Address: </span><span className='uppercase'>{location}</span></p>
                    <p><span className='font-serif font-semibold border-slate-500'>Condition: </span><span>{book_condition}</span></p>
                    <p>{Year_of_use} used</p>
                    <p> <span className='font-serif font-semibold border-slate-500'>Description: </span>{description ? description : 'No description'}</p>
                    <h4 className='text-xl font-bold mb-2 mt-4'>Contact Information</h4>
                    <p><MdPhoneAndroid  className='inline'/> {phone}</p>
                    <p><MdEmail  className='inline'/> {sellerEmail}</p>

                  <div className='mt-4'>

                  <button title='Book Now' className='btn btn-primary btn-sm text-white mr-4 mt-2'><label 
                 htmlFor="booking-modal" className='cursor-pointer text-sm'
                 onClick={()=> setBookProduct(bookDetails)}
                 >Book Now</label></button> 
                  <label 
                   htmlFor="report-modal"
                    className='btn btn-primary btn-sm text-white mt-2' 
                    onClick={()=>  setReportProduct(bookDetails)}
                 > Report</label>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;