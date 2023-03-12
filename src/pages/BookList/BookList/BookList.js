import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookCart from '../../Category/BookCart/BookCart';
import Banner from '../../Home/Banner/Banner';
import Loading from '../../Loading/Loading';
import BookListBanner from '../BookListBanner/BookListBanner';



const BookList = () => {
    const categories = useLoaderData();
    const [bookProduct, setBookProduct] = useState(null);
    const navigation = useNavigation();

    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    return (
        <div>
           <BookListBanner></BookListBanner>
           <div className='w-11/12 mx-auto'>
            {
              categories.length === 0?
              <h1 className='text-center h-[400px] mt-12 text-2xl'>NO Product</h1>  
              :
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 my-12'>
            {
              categories.map(category => <BookCart
              key={category._id}
              category={category}
              setBookProduct={setBookProduct}
              
              ></BookCart>)  
            }
            </div> 
            } 

       
        </div>
        </div>
    );
};

export default BookList;