import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {createUser} = useContext(AuthContext)

    const handleLogin = data =>
    {
        console.log(data);
        createUser(data.email, data.password)
        .then(res=> {
            const user = res.user;
            console.log(user);
        })
        .catch(error => console.log(error))
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
                    <input className='w-full btn my-8 text-white' type='submit' value="Sign Up" />
                </form>
                <p className='text-center'>Already have a account? <Link className='text-secondary' to="/login">Login</Link></p>
                <div className="divider">OR</div>

                     <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;