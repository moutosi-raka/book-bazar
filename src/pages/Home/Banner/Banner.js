import React from 'react';
import book from '../../../assets/banner/book-catroon.png'
import PrimaryButtom from '../../../Components/PrimaryButton/PrimaryButtom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero banner p-12"
             >
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={book} alt='' className="hidden lg:block max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Buy & Sell Second Hand Book!</h1>
                        <p className="py-6 text-xl text-white">In this website , Any one can buy and sell there second hand book. It is great opportunity for buyer and seller. </p>
                        <PrimaryButtom>See AllS</PrimaryButtom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;