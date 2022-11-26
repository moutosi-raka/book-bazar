import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='p-8 shadow-2xl rounded-lg w-1/2'>
                <h2 className='text-4xl'>Login</h2>
                <form onSubmit={handleSubmit()}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email")}
                            placeholder="email" className="input input-bordered" />
                    </div>
                    <select className="select select-bordered w-full mt-8"
                     {...register("userType", { required: true })}
                    >
                        <option value='buyer' selected>Buyer</option>
                        <option value='seller'>Seller</option>
                    </select>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password")} placeholder="password" className="input input-bordered" />
                    </div>
                    {/* <p>{data}</p> */}
                    <input className='w-full btn my-8' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;