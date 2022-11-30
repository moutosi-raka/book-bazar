import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import BookCart from './BookCart/BookCart';
import BookingModel from './BookingModel/BookingModel';


const Category = () => {
   
    const categories = useLoaderData();
    const [bookProduct, setBookProduct] = useState(null);
    const navigation = useNavigation();

 
 

    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }

    
   
    return (
        <div>
          <h1 className='text-3xl'>Category</h1>
            {
              categories.length === 0?
              <h1 className='text-center h-[400px] mt-12 text-2xl'>NO Product</h1>  
              :
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-12'>
            {
              categories.map(category => <BookCart
              key={category._id}
              category={category}
              setBookProduct={setBookProduct}
              
              ></BookCart>)  
            }
            </div> 
            } 
        { bookProduct 
        && <BookingModel 
        bookProduct={bookProduct}
        setBookProduct={setBookProduct}
        ></BookingModel>}
       
        </div>
        
    );
};

export default Category;