import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm(); 
    const {login} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data =>
    {
        console.log(data);
        setLoginError('');
        login(data.email, data.password)
        .then(res=> {
            const user = res.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message);
            setLoginError(error.message)
        })
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='p-8 shadow-2xl rounded-lg w-1/2'>
                <h2 className='text-4xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                            {...register("password", 
                            {required: "password is required",
                             minLength: {value: 6, message: 'password must be 6 characters.'}})} placeholder="password" 
                            className="input input-bordered" />
                            {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                    </div>
                    <div>
                    {loginError && <p className='text-red-700 text-center'>{loginError}</p>}
                </div>
                    <input className='w-full btn my-8 text-white' type="submit" value='Login' />
                </form>
                <p className='text-center'>New to Book Bazar? <Link className='text-secondary' to="/signup">Create New Account</Link></p>
                
                <div className="divider">OR</div>

                     <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;