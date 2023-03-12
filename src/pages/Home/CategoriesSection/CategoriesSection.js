import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import CategoryCart from './CategoryCart/CategoryCart';


const CategoriesSection = () => {
    const [categories, setCategories] = useState([]);
    // useEffect( ()=>{
    //     fetch('categories.json')
    //     .then( res => res.json())
    //     .then(data => setCategories(data))
    // },[])
    useEffect( ()=>{
        fetch('http://localhost:5000/category')
        .then( res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='my-12 w-11/12 mx-auto'>
           <h1 className='my-8 text-3xl font-bold text-center text-linear'>Book Categories</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12'>
           {
             categories.slice(0,3).map(category => <CategoryCart
             key={category.category_id}
             category={category}
             ></CategoryCart>)
           }
           </div>
           <div className='text-center'>
           <Link to='/category'><span className='text-linear text-xl'>See More <FaArrowCircleRight className='inline text-purple-400 text-xl'/></span></Link>
           </div>
           
        </div>
    );
};

export default CategoriesSection;