import React from 'react';
import Banner from '../Banner/Banner';
import CategoriesSection from '../CategoriesSection/CategoriesSection';

const Home = () => {
    return (
        <div className='my-5'>
            <Banner></Banner>
            <CategoriesSection></CategoriesSection>
        </div>
    );
};

export default Home;