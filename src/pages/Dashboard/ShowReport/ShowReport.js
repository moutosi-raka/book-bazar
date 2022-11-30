import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModel/ConfirmationModal';

const ShowReport = () => {

    const report = "true";
    const [deleteProduct, setDeleteProduct] = useState(null);
    const closeModal = ()=>{
        setDeleteProduct(null);
    }


    const { data: Complaints = [], refetch } = useQuery({
        queryKey: ['category', report],
        queryFn: async () => {
            const res = await fetch(`https://book-bazar-server-moutosi-raka.vercel.app/categorys?report=${report}`);
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteProduct =(report) =>{
        fetch(`https://book-bazar-server-moutosi-raka.vercel.app/category/product/${report._id}`,
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
            <h1 className='text-3xl f-family-abril fw  my-8'>Report</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Reporter Name</th>
                            <th>Book Name</th>
                            <th>price</th>
                            <th>Complaint</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Complaints.map((Complaint, i) => <tr key={Complaint._id}>
                                <th>{i + 1}</th>
                                <td>{Complaint.reports}</td>
                                <td>{Complaint.book_name}</td>
                                <td>{Complaint.resale_price}</td>
                                <td>{Complaint.report}</td>
                                <th>
                                    <label onClick={() => setDeleteProduct(Complaint)} htmlFor="confirmation-modal" className="btn bg-red-700 text-white btn-xs ">Delete</label>
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

export default ShowReport;