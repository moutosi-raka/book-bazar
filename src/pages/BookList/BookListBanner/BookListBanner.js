import React from 'react';
import book from '../../../assets/banner/book-catroon.png'

const BookListBanner = ({handleSearch}) => {
    return (
        <div>
            <div className="hero banner px-12"
            >
                <div className="hero-content flex-col lg:flex-row-reverse w-[60%] ">
                    <img src={book} alt='' className="hidden lg:block w-32 rounded-lg shadow-2xl" />
                    <div>
                        <form onSubmit={handleSearch} className='flex items-center'>
                            <div className="form-control">
                                <input name='search' type="text" placeholder="What are you looking for?" className="input input-bordered w-48 md:w-96" />
                            </div>
                            <button className='btn btn-primary ml-2 text-white'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookListBanner;