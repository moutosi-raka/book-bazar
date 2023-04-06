import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModel/ConfirmationModal';


const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [deleteProduct, setDeleteProduct] = useState(null);
    const closeModal = ()=>{
        setDeleteProduct(null);
    }
    const url = `https://book-bazar-server-moutosi-raka.vercel.app/api/product/list?email=${user?.email}`;

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['category', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleAds = id => {
        fetch(`https://book-bazar-server-moutosi-raka.vercel.app/api/product/update/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('add ads item successfully');
                    refetch();
                }
            })
    }

    const handleDeleteProduct =(product) =>{
        fetch(`https://book-bazar-server-moutosi-raka.vercel.app/api/product/delete/${product._id}`,
        {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount>0){
                console.log(data);
                refetch();
                toast('Delete successfully')
            }
        
        })
    }

    return (
        <div>
            <div className='flex justify-between items-center '>
            <h1 className='text-3xl f-family-abril fw  my-8 text-linear'>My Product</h1>
            <h1 className='text-3xl f-family-abril fw  my-8 text-linear'>Total Product {myProducts.length}</h1>
            <Link className='btn btn-primary text-white' to='/dashboard/addproduct'>Add Product</Link>
            </div>
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Img</th>
                            <th>Book Name</th>
                            <th>price</th>
                            <th>Sold Status</th>
                            <th>Add Ads</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.length === 0 ?
                            <tr  className='h-40'>
                            <th></th>
                            <td></td>
                            <td></td>
                            <td className='text-center text-2xl'>No Product</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                            :
                            myProducts.map((myProduct, i) => <tr key={myProduct._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myProduct.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{myProduct.book_name}</td>
                                <td>{myProduct.resale_price}</td>
                                <td>{myProduct.paid? <span className='font-bold text-primary'>sold</span> : 'available'}</td>
                                <th>
                                    {!myProduct.addADS && myProduct.report==='false' && <button onClick={() => handleAds(myProduct._id)} className="btn btn-primary text-white btn-xs ">Add ADS</button>}
                                </th>
                                <th>
                                    <label onClick={() => setDeleteProduct(myProduct)} htmlFor="confirmation-modal" className="btn bg-red-700 text-white btn-xs ">Delete</label>

                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ConfirmationModal
                title={`Are you sure to detele product`}
                message={`if you delete ${deleteProduct.book_name} It cannot be undone.`}
                closeModal={closeModal}
                successButtonName = "Delete"
                successAction={handleDeleteProduct}
                modalData = {deleteProduct}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;