import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModel/ConfirmationModal';


const AllUser = () => {
    const role = 'buyer';
    const [deleteBuyer, setDeleteBuyer] = useState(null);
    const closeModal = ()=>{
        setDeleteBuyer(null);
    }
    const {data: buyerUser = [], refetch} = useQuery({
        queryKey: ['all-user-info', role],
        queryFn: async()=>{
            const res = await fetch(`https://book-bazar-server-moutosi-raka.vercel.app/all-user-info/role?role=${role}`);
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBuyer =(buyer) =>{
        fetch(`https://book-bazar-server-moutosi-raka.vercel.app/all-user-info/role/${buyer._id}`,
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
            <h1 className='text-3xl f-family-abril fw  my-8'>All Buyer List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Delete User</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyerUser.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i+1}</th>
                                <td>{buyer.userName}</td>
                                <td>{buyer.userEmail}</td>
                                <td> <label onClick={() => setDeleteBuyer(buyer)} htmlFor="confirmation-modal" className="btn bg-red-700 text-white btn-xs ">Delete</label></td>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
            {
                deleteBuyer && <ConfirmationModal
                title={`Are you sure to detele Buyer`}
                message={`if you delete ${deleteBuyer.book_name} It cannot be undone.`}
                closeModal={closeModal}
                successButtonName = "Delete"
                successAction={handleDeleteBuyer}
                modalData = {deleteBuyer}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUser;