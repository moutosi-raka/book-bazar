import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import CategoriesSection from '../CategoriesSection/CategoriesSection';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    
    const url = 'http://localhost:5000/category';
    const {data: adsProducts = []} = useQuery({
        queryKey: ['category'],
        queryFn: async()=>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    const adsItems = adsProducts.filter(item => item.addADS)
   

    return (
        <div className='my-5'>
            <Banner></Banner>
            <CategoriesSection></CategoriesSection>
            {
              adsItems.length>0 &&  <Advertise adsItems={adsItems}></Advertise> 
            }
           
        </div>
    );
};

export default Home;