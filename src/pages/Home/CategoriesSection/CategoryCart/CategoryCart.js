import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButtom from '../../../../Components/PrimaryButton/PrimaryButtom';

const CategoryCart = ({category}) => {
    const {category_id,category_name} = category;
    return (

        <div className='bg-slate-900 w-[16rem] md:w-[22rem] mx-auto shadow-primary shadow-md rounded-lg'>
            <div className='h-32 bg-slate-300 pt-12 rounded-t-lg'>
            <h2 className=" text-2xl md:text-4xl text-black font-bold text-center my-auto font-serif">{category_name}</h2>
            {/* <img className=' h-40 object-cover w-full' src={category_img} alt='' /> */}
            </div>
            <div className='py-3'>
           
            <div className='flex justify-center mt-5'>
            <Link to={`/category/${category_id}`}><PrimaryButtom>See Details</PrimaryButtom></Link>
            </div>
            </div>
            
        </div>
    );
};

export default CategoryCart;