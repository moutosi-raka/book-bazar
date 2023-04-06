import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModel/ConfirmationModal';

const ShowReport = () => {

    
    const [deleteProduct, setDeleteProduct] = useState(null);
    const closeModal = ()=>{
        setDeleteProduct(null);
    }


    const { data: Complaints = [], refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`https://book-bazar-server-moutosi-raka.vercel.app/api/report/list`);
            const data = await res.json();
            return data;
        }
    })
    const handleUpdateProduct =(report) =>{
        fetch(`https://book-bazar-server-moutosi-raka.vercel.app/api/report/update/${report.productId}`,
        {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                console.log(data);
                refetch();
                toast('Delete successfully');
               

            }
        
        })
    }
    return (
        <div>
            <h1 className='text-3xl f-family-abril fw  my-8 text-linear'>Report</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            {/* <th>Reporter Name</th> */}
                            <th>Reporter Name</th>
                            <th>Book Name</th>
                            <th>Reason</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Complaints.length === 0 ?
                          <tr className='h-40'>
                            <td></td>
                            <td></td>
                            <td className='text-2xl text-center'>No Report</td>
                            <td></td>
                            <td></td>
                          </tr>
                             :
                            Complaints.map((Complaint, i) => <tr key={Complaint._id}>
                                <td>{i + 1}</td>
                                {/* <td>{Complaint.}</td> */}
                                <td>{Complaint.reporterName}</td>
                                <td>{Complaint.productName}</td>
                                <td>{Complaint.reason}</td>
                                <td>
                                    {
                                        Complaint.report ? <></> : 
                                        <label onClick={() => setDeleteProduct(Complaint)} htmlFor="confirmation-modal" className="btn btn-primary text-white btn-xs ">Hide Product</label>
                                    }
                             
                                </td>
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
                successButtonName = "Hide"
                successAction={handleUpdateProduct}
                modalData = {deleteProduct}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ShowReport;