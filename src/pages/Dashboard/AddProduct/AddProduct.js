import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleAddProduct = data => {
        console.log(data);

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
                                { required: "year of use is required" })}
                            className="input input-bordered" />
                        {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}
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
                        <input type="text"
                            {...register("img",
                                { required: "year of use is required" })}
                            className="input input-bordered" />
                        {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}
                    </div>
                </div>

                <input className='w-1/2 mx-auto btn my-8 text-white' type='submit' value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;