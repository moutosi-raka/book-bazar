import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCart = ({item}) => {
    const {img, book_name,_id, resale_price, Year_of_use, book_condition} = item;
    return (
        <div className="card bg-base-100 shadow-xl w-60 image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Book Name: {book_name}</h2>
                <p>Sale Price: {resale_price}</p>
                <p>{Year_of_use} used & condition is {book_condition} </p>
                <button className='btn btn-primary text-white'><Link to={`/bookDetails/${_id}`}>See details</Link></button>
            </div>
        </div>
    );
};

export default AdvertiseCart;