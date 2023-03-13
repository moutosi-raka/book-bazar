import React, { useEffect, useState } from 'react';
import book from '../../../assets/banner/book-catroon.png'
import CategoryCart from '../../Home/CategoriesSection/CategoryCart/CategoryCart';

const AllCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect( ()=>{
        fetch('categories.json')
        .then( res => res.json())
        .then(data => setCategories(data))
    },[])
    // useEffect( ()=>{
    //     fetch('http://localhost:5000/category')
    //     .then( res => res.json())
    //     .then(data => setCategories(data))
    // },[])

    //   const filterCategories = categories.filter(category => category.category_id !== )
    //   console.log('filter categories', filterCategories)
    return (
        <div>
            <div className="hero banner px-12">
            <div className="hero-content flex-col lg:flex-row-reverse w-[60%] ">
                <img src={book} alt='' className="hidden lg:block w-32 rounded-lg shadow-2xl" />
                <div>
                <h1 className='my-8 text-3xl font-bold text-center text-linear'>Book Categories</h1>     
                </div>
            </div>
        </div>
        <div className='my-12 w-11/12 mx-auto'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12'>
        {
          categories.map(category => 
            category.category_id && <CategoryCart
          key={category.category_id}
          category={category}
          ></CategoryCart>)
        }
        </div>
        
     </div>
     </div>
    );
};

export default AllCategory;