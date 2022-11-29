import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ReportModal = ({reportProduct, setReportProduct}) => {
    const {_id, book_name, resale_price} = reportProduct;
    const {user} = useContext(AuthContext);
    const date = format(new Date(), 'PPpp') ;

    const handleReporting = event =>{
        event.preventDefault();
        const form = event.target;
        const reporterName = form.reporterName.value;
        const report = form.report.value;
        const reporterEmail= form.email.value;
      
        const reportInfo = {
            reportDate: date,
            reporterName,
            productId: _id,
            reporterEmail,
            book_name,
            price: resale_price,
            report
        }
        fetch('http://localhost:5000/reports',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.acknowledged)
            {
                setReportProduct(null);
                toast.success('Booked confirmed')
            }    
        })
        
    }
    return (
        <div>
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleReporting}>
                    <input name='reporterName' type="text" defaultValue={user?.displayName} disabled className="input mb-2 input-bordered w-full " />
                    <input name='email' type="email" defaultValue={user?.email} disabled className="input mb-2 input-bordered w-full" />
                    <input name='bookName' type="text" value={book_name}
                    disabled className="input mb-2 input-bordered w-full" />
                    <input type="text" value={ resale_price}
                    name='price' 
                    disabled className="input my-2 input-bordered w-full " />
                    <textarea className="textarea textarea-bordered w-full"
                    name='report'
                    required placeholder="Write your complaint"></textarea>
                    <input type="text" value={date} disabled className="input mb-2 input-bordered w-full" />
                    <br></br>
                    <div className='w-full'>
                    <button className='btn w-full'>Reported</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportModal;