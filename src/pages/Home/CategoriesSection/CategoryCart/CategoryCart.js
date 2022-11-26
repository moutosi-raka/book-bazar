import React from 'react';
import PrimaryButtom from '../../../../Components/PrimaryButton/PrimaryButtom';

const CategoryCart = ({category}) => {
    const {category_name, category_img} = category;
    return (
        <div className="card w-60 shadow-xl image-full">
            <figure><img src={category_img} alt="Shoes" /></figure>
            <div className="card-body mt-20">
               <div className='px-3 py-12'>
               <h2 className="text-3xl text-white font-bold text-center">{category_name}</h2>
               </div>
                
                <div className="card-actions mt-8 justify-center">
                    <PrimaryButtom>See Details</PrimaryButtom>
                </div>
            </div>
        </div>
    );
};

export default CategoryCart;