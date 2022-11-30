import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import CategoriesSection from '../CategoriesSection/CategoriesSection';
import { useQuery } from '@tanstack/react-query';
import ClientReview from '../ClientReview/ClientReview';

const Home = () => {
    
    const url = 'https://book-bazar-server-moutosi-raka.vercel.app/category';
    const {data: adsProducts = []} = useQuery({
        queryKey: [],
        queryFn: async()=>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    const adsItems = adsProducts.filter(item => item.addADS && item.paid === false);
   

    return (
        <div className='my-5'>
            <Banner></Banner>
            <CategoriesSection></CategoriesSection>
            {
              adsItems.length>0 &&  <Advertise adsItems={adsItems}></Advertise> 
            }
            <ClientReview></ClientReview>
           
        </div>
    );
};

export default Home;