import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModel/ConfirmationModal';


const AllSeller = () => {
    const role = 'seller';
    const [deleteSeller, setDeleteSeller] = useState(null);
    const closeModal = ()=>{
        setDeleteSeller(null);
    }
    const {data: sellerUser = [], refetch} = useQuery({
        queryKey: ['user', role],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/api/user/role?role=${role}`);
            const data = await res.json();
            return data;
        }
    })

    const handleVerify = id =>{
        fetch(`http://localhost:5000/api/user/seller/verify/${id}`,{
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
    const handleDeleteSeller =(seller) =>{
        fetch(`http://localhost:5000/api/user/delete/${seller._id}`,
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
            <h1 className='text-3xl f-family-abril fw  my-8 text-linear'>All Seller List</h1>
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
                                <td><label onClick={() => setDeleteSeller(seller)} htmlFor="confirmation-modal" className="btn bg-red-700 text-white btn-xs ">Delete</label></td>
                            </tr> )
                        } 
                    </tbody>
                </table>
            </div>
            {
                deleteSeller && <ConfirmationModal
                title={`Are you sure to detele Buyer`}
                message={`if you delete ${deleteSeller.book_name} It cannot be undone.`}
                closeModal={closeModal}
                successButtonName = "Delete"
                successAction={handleDeleteSeller}
                modalData = {deleteSeller}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllSeller;