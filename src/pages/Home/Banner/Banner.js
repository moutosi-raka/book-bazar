import React from 'react';
import sofa from '../../../assets/banner/sofa.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero banner p-12"
             >
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={sofa} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Buy & Sell Old Furniture!</h1>
                        <p className="py-6 text-xl text-white">In this website , Any one can buy and sell there old furniture. It is great opportunity for buyer and seller. </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;