import React from 'react';
import PrimaryButtom from '../../../Components/PrimaryButton/PrimaryButtom';

const MyProduct = () => {
    return (
        <div>
            <h1 className='text-3xl f-family-abril fw  my-8'>My Product</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th>Sale Status</th>
                            <th>Add Advertise</th>
                            <th>Delete product</th>    
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>200</td>
                            <td><span className='text-green-700 font-bold'>Sold</span></td>
                            <td><PrimaryButtom>Add Ads</PrimaryButtom></td>
                            <td><button className='btn bg-red-700 text-white'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;