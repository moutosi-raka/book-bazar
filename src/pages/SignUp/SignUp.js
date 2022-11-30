import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken/useToken';
import GoogleSignUp from '../Shared/GoogleSignUp/GoogleSignUp';


const SignUp = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);
   

    if(token){
        navigate('/');
    }

    const handleLogin = data =>
    {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(res=> {
            const user = res.user;
            console.log(user);
            toast.success('user created succrssfully');
            const userInfo ={
                displayName: data.name,
                photoURL: data.photoURL
            }
            updateUser(userInfo)
            .then( ()=>{
                storedUserDb(data.email, data.name, data.role);
               
            })
            .catch(error => console.log(error))
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        })
    }
    const storedUserDb = (email,name,role)=>
    {
        const allUserInfo = {
            userEmail: email,
            userName: name,
            role : role
        }
        fetch('http://localhost:5000/all-user-info',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allUserInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setCreateUserEmail(email);
            
        })
    } 


  
    return (
        <div className='my-20 flex justify-center items-center'>
            <div className='p-8 shadow-2xl rounded-lg w-1/2'>
                <h2 className='text-4xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text"
                            {...register("name", 
                            {required: "Name is required"})}
                            placeholder="Your name" 
                            className="input input-bordered" />
                             {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text"
                            {...register("photoURL")}
                            placeholder="photoURL" 
                            className="input input-bordered" />
                           
                    </div>
                    <select className="select select-bordered w-full mt-8"
                     {...register("role", { required: true })}
                    >
                        <option value='buyer' selected>Buyer</option>
                        <option value='seller'>Seller</option>
                    </select>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", 
                            {required: "Email Address is required"})}
                            placeholder="email" 
                            className="input input-bordered" />
                             {errors.email && <p className='text-red-700' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", 
                            {required: "password is required",
                             minLength: {value: 6, message: 'password must be 6 characters.'}})} placeholder="password" 
                            className="input input-bordered" />
                            {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                    </div>
                    <div>
                        {
                        signUpError && <p className='text-red-700'>{signUpError}</p>
                       }
                    </div>
                    <input className='w-full btn my-8 text-white' type='submit' value="Sign Up" />
                </form>
                <p className='text-center'>Already have a account? <Link className='text-secondary' to="/login">Login</Link></p>
                <div className="divider">OR</div>

                     <GoogleSignUp></GoogleSignUp>
            </div>
        </div>
    );
};

export default SignUp;