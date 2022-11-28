import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import PrimaryButtom from '../../../Components/PrimaryButton/PrimaryButtom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import MyProductCart from './MyProductCart';

const MyProduct = () => {
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/category/product?email=${user?.email}`;

    const {data: myProducts = []} = useQuery({
        queryKey: ['category', user?.email],
        queryFn: async()=>{
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-3xl f-family-abril fw  my-8'>My Product {myProducts.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4 my-12'>
            {
              myProducts.map(myProduct => <MyProductCart
              key={myProduct._id}
              myProduct={myProduct}
              ></MyProductCart>)  
            }
            </div>
        </div>
    );
};

export default MyProduct;