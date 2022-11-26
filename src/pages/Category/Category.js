import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCart from './BookCart/BookCart';

const Category = () => {
    const categories = useLoaderData();
    
    return (
        <div>
            <h1 className='text-3xl'>Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-12'>
            {
              categories.map(category => <BookCart
              key={category._id}
              category={category}
              ></BookCart>)  
            }
            </div>  
        </div>
    );
};

export default Category;