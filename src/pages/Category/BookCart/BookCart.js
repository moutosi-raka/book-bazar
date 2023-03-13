import React, { useContext } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaArrowCircleRight } from "react-icons/fa";
import { WiTime3 } from "react-icons/wi";
import useUser from '../../../hooks/useUser/useUser';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const BookCart = ({ category , setBookProduct}) => {
    const {img, _id, book_name, resale_price, original_price, location, Year_of_use , sellerName, description, phone , book_condition, verify} = category;
    
    const {user} = useContext(AuthContext);
    const [dbUser, isLoading] = useUser(user?.email);


    const handleReport = id =>{
        fetch(`https://book-bazar-server-moutosi-raka.vercel.app/category/report/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                toast.success('report successfully');
            }
        })
    }
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
               
                 <button title='Book Now' className='text-primary text-2xl'><label 
                 htmlFor="booking-modal" className='cursor-pointer'
                 onClick={()=> setBookProduct(category)}
                 ><FaAddressBook /></label></button>
                 <div className='flex items-center '>
                 <Link to={`/bookDetails/${_id}`} ><button className='btn btn-outline btn-xs text-primary text-xm inline'>Details <FaArrowCircleRight className='inline text-primary'/></button></Link>
                 </div>
                  
               
                 <label 
                 className='btn btn-link btn-sm'
                 
                 onClick={()=> handleReport(category._id)}
                 >Report Now</label>
             </div>
               
            </div>
        </div>
    </div>

    );
};

export default BookCart;