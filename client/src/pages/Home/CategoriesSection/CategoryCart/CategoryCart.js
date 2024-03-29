import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButtom from '../../../../Components/PrimaryButton/PrimaryButtom';
import './CategoryCart.css'

const CategoryCart = ({category}) => {
    const {category_id,category_name} = category;
    return (

        <div>
            <Link to={`/category/${category_id}`}>
        <div className='glass w-[15rem] md:w-[15rem] mx-auto shadow-primary shadow-md rounded-lg'>
            <div className='h-28 py-8 rounded-t-lg '>
            <h2 className=" text-xl md:text-2xl text-white font-bold text-center my-auto">{category_name}</h2>
            {/* <img className=' h-40 object-cover w-full' src={category_img} alt='' /> */}
            </div>
            {/* <div className='py-3'>
           
            <div className='flex justify-center mt-5'>
            <Link to={`/category/${category_id}`}><PrimaryButtom>See Details</PrimaryButtom></Link>
            </div>
            </div> */}
            
        </div>
        </Link>
        </div>
    );
};

export default CategoryCart;