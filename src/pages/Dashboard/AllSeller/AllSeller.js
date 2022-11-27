import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import PrimaryButtom from '../../../Components/PrimaryButton/PrimaryButtom';

const AllSeller = () => {
    const role = 'seller';
    const {data: sellerUser = [], refetch} = useQuery({
        queryKey: ['all-user-info', role],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/all-user-info/role?role=${role}`);
            const data = await res.json();
            return data;
        }
    })

    const handleVerify = id =>{
        fetch(`http://localhost:5000/user-info/role/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                toast.success('verify successfully');
                refetch();
            }
        })
    }
   
    return (
        <div>
            <h1 className='text-3xl f-family-abril fw  my-8'>All Seller List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete User</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellerUser.map((seller,i) => <tr key={seller._id}>
                                <th>{1+i}</th>
                                <td>{seller.userName}</td>
                                <td>{seller.userEmail}</td>
                                <td>{!seller?.verify ?<button onClick={()=> handleVerify(seller._id)} className="btn btn-sm text-white btn-primary ">Verify</button> : "verified"}</td>
                                <td><button className='btn btn-sm bg-red-700 text-white'>Delete</button></td>
                            </tr> )
                        } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;