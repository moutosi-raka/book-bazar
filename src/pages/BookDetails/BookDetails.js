import React from 'react';
import { useLoaderData } from 'react-router-dom';
import book from '../../assets/banner/book-catroon.png'

const BookDetails = () => {
    const bookDetails = useLoaderData();
    const { img, _id, book_name, resale_price, original_price, location, Year_of_use, sellerName, description, phone, book_condition, author_name, verify } = bookDetails;
    console.log('kk', bookDetails)
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

            <div className='px-12 my-8 flex'>
                <div className='p-4 bg-slate-400'>
                <img src={img} alt='' className="hidden lg:block h-72" />
                </div>
                <div className='px-8'>
                    <p className='text-white'>{description ? description : 'No description'}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;