
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useUser from '../../../hooks/useUser/useUser';
;

const ReportModal = () => {
    const {user, setReportProduct, reportProduct} = useContext(AuthContext);
    const [dbUser] = useUser(user?.email);
    const {_id, book_name} = reportProduct;


    const handleReporting = (event, id) =>{
        event.preventDefault();
        const form = event.target;
        const reason = form.reportInfo.value;
        console.log('user',dbUser)
      
      
        const reportInfo = {
            reason,
            reporterName: dbUser.userName,
            productName: book_name, 
            productId: id,
            uid: dbUser._id,
            report: false
        }

        console.log('report', reportInfo)


        fetch('http://localhost:5000/api/report/create',{
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
                toast.success('Report successfully');
            }    
        })
        
    }
    return (
        <div>
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={(event)=>handleReporting(event, _id)}>
                  <div className='mt-12'>
                          <div>
                            <div className='flex items-center mb-2'>
                              <input type="radio" className='radio radio-info mr-3' value="false information" name="reportInfo" /> <span>False Information</span>  
                            </div>

                            <div className='flex items-center mb-2'>
                             <input type="radio" className='radio radio-info mr-3' value="Unauthorized Sales" name="reportInfo" /> Unauthorized Sales  
                            </div>

                            <div className='flex items-center mb-2'>
                             <input type="radio" className='radio radio-info mr-3' value="High Price" name="reportInfo" /> High Price 
                            </div>

                            <div className='flex items-center mb-2'>
                              <input type="radio" className='radio radio-info mr-3' value="Other" name="reportInfo" /> Other
                           </div>
                 </div>
                    <div className='w-full flex justify-end'>
                    <button className='btn btn-primary btn-sm text-white'>Submit</button>
                    </div>
                  </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportModal;