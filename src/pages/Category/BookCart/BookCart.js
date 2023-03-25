import React, { useContext } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { WiTime3 } from "react-icons/wi";
import useUser from '../../../hooks/useUser/useUser';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const BookCart = ({ category  }) => {
    const {img, _id, book_name, resale_price, original_price, location, Year_of_use , sellerName, description, phone , book_condition, verify} = category;
    
    const {user,setBookProduct, setReportProduct} = useContext(AuthContext);
    const [dbUser, isLoading] = useUser(user?.email);


    // const handleReport = id =>{
    //     fetch(`http://localhost:5000/category/report/${id}`,{
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         if(data.modifiedCount>0){
    //             toast.success('report successfully');
    //         }
    //     })
    // }
    if(isLoading){
        return <div className='h-[400px] flex justify-center items-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div> 
    }
    return (
        <div className="max-w-lg p-4 shadow-purple-400  shadow-lg border-2 border-purple-400 rounded-lg bg-white">
        <div className="flex justify-between pb-4 border-bottom">
           
                <div className="flex items-center ">
                <p className="mb-0 capitalize font-bold ">{sellerName}</p>
                <span className='ml-2'>
                    {
                       verify? <FaCheckCircle className='text-blue-500'></FaCheckCircle>: <></>
                    }
                </span>
                </div>
            
          
        </div>
        <div className="space-y-4">
            <div className="flex items-center justify-center">
                <img src={img} alt="" className="block  object-center  h-40 dark:bg-gray-500" />
            </div>
            <div className="space-y-2 text-sm">
              
                <h3 className="text-xl font-semibold ">{book_name}</h3>
               <div className='flex justify-between'>
               <p className='text-black text-sm'>Original <TbCurrencyTaka className='inline'/>{original_price}</p>
                <p className='text-black'>Sell <TbCurrencyTaka className='inline'/>{resale_price}</p>
               </div>
                <div className='flex justify-between'>
                <p className='text-black'>Condition {book_condition}</p>
                <p className="leading-snug dark:text-gray-400"><WiTime3 className='inline mr-1'/>{Year_of_use}</p>
                </div>
                
               
                 <div className='flex justify-between my-5 '>
                 <div className='flex items-center mr-2'>
                 <Link to={`/bookDetails/${_id}`} ><button className='btn btn-outline btn-primary btn-xs text-xm inline'> <FaEye/></button></Link>
                 </div>
                 <button title='Book Now' className='w-28 font-semibold rounded-full  py-1 border bg-primary text-white'><label 
                 htmlFor="booking-modal" className='cursor-pointer text-sm'
                 onClick={()=> setBookProduct(category)}
                 >Book Now</label></button>
               
               <button  className='w-20 font-semibold rounded-full cursor-pointer  py-1 border bg-primary text-white text-center'>
                 <label 
                 htmlFor="report-modal"
                 className='cursor-pointer text-sm'
                 onClick={()=> setReportProduct(category)}
                 >Report</label>
                 </button>
             </div>
               
            </div>
        </div>
    </div>

    );
};

export default BookCart;