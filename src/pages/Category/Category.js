import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCart from './BookCart/BookCart';
import BookingModel from './BookingModel/BookingModel';

const Category = () => {
    const categories = useLoaderData();
    const [bookProduct, setBookProduct] = useState(null);
    return (
        <div>
            <h1 className='text-3xl'>Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-12'>
            {
              categories.map(category => <BookCart
              key={category._id}
              category={category}
              setBookProduct={setBookProduct}
              ></BookCart>)  
            }
            </div>  
        { bookProduct 
        && <BookingModel 
        bookProduct={bookProduct}
        setBookProduct={setBookProduct}
        ></BookingModel>}
        </div>
    );
};

export default Category;