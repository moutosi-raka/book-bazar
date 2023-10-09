import React, { useContext } from 'react';
import './Profile.css'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import {BsCameraFill} from 'react-icons/bs'

const Profile = ()=>{
    const { user } = useContext(AuthContext);

    return(
        <div className=''>
          <div className='grid place-items-center my-12'>
            <div className='w-9/12 h-[600px] profile-bg relative'>
            <div  className='w-full h-[200px] bg-slate-700  rounded-t-xl'></div>
              <div className='w-56 absolute h-56 top-[14%] right-[40%] bg-white rounded-full grid place-items-center'>
                <img  className='w-52 h-52 rounded-full object-cover' src={user?.photoURL} alt="" />
              </div>
              <div className='cursor-pointer grid place-items-center text-white text-2xl absolute w-10 h-10 top-[40%] right-[40%] bg-slate-600 rounded-full'>
               <BsCameraFill></BsCameraFill>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Profile;