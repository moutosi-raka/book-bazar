import { Result } from 'postcss';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useUser from '../../../hooks/useUser/useUser';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [dbUser, isLoading] = useUser(user?.email);
    
    const date = format(new Date(), 'PPpp') ;
 
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey= process.env.REACT_APP_img_key;
    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image);
        const url =`https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url)
                const seller = {
                   sellerName: user.displayName,
                   sellerEmail: user.email,
                   book_name: data.book_name,
                   category_id: data.category_id,
                   original_price: data.original_price,
                   resale_price: data.resale_price,
                   Year_of_use: data.Year_of_use,
                   img: imgData.data.url,
                   description: data.description,
                   phone: data.phone,
                   location: data.location,
                   book_condition: data.book_condition,
                   verify: dbUser.verify,
                   paid: false,
                   date

                }
                //saved seller info database
                fetch('http://localhost:5000/category',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(seller)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.acknowledged){
                      toast.success("Add product successfully");
                      navigate('/dashboard/myproduct')
                    }
                })
            }
        })
    }
    if(isLoading){
        return <div className='h-[400px] flex justify-center items-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
    }

    return (
        <div className='p-5'>
            <h1 className='text-3xl f-family-abril fw  my-8'>Add Product</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input type="text"
                            {...register("book_name",
                                { required: "Name is required" })}
                            placeholder="Your name"
                            className="input input-bordered" />
                        {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Select Category</span>
                        </label>
                        <select className="select select-bordered w-full"
                        {...register("category_id", { required: true })}
                    >
                        <option value='1' selected>Nobel</option>
                        <option value='2'>Poetry</option>
                        <option value='3'>Biograpy</option>
                    </select>
                      
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Book Condition</span>
                        </label>
                        <select className="select select-bordered w-full"
                        {...register("book_condition", { required: true })}
                    >
                        <option value='Excellent' selected>Excellent</option>
                        <option value='Good'>Good</option>
                        <option value='Fair'>Fair</option>
                    </select>
                      
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Orinal price</span>
                        </label>
                        <input type="text"
                            {...register("original_price",
                                { required: "original price is required" })}
                            className="input input-bordered" />
                        {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input type="text"
                            {...register("resale_price",
                                { required: "Resale price is required" })}
                            className="input input-bordered" />
                        {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text"
                            {...register("description")}
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Year of use</span>
                        </label>
                        <input type="text"
                            {...register("Year_of_use",
                                { required: "year of use is required" })}
                            className="input input-bordered" />
                        {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text"
                            {...register("location",
                                { required: "location is required" })}
                            className="input input-bordered" />
                        {errors.location && <p className='text-red-700' role="alert">{errors.location?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile No</span>
                        </label>
                        <input type="text"
                            {...register("phone")}
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Img upload</span>
                        </label>
                        <input type="file"
                            {...register("image",
                                { required: "img is required" })}
                            className="input input-bordered" />
                        {errors.file && <p className='text-red-700' role="alert">{errors.file?.message}</p>}
                    </div>
                </div>

                <input className='w-1/2 mx-auto btn my-8 text-white' type='submit' value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;