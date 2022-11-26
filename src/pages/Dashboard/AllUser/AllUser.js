import React from 'react';
import PrimaryButtom from '../../../Components/PrimaryButton/PrimaryButtom';

const AllUser = () => {
    return (
        <div>
            <h1 className='text-3xl f-family-abril fw  my-8'>My Product</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Delete User</th>    
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>raka@gmail</td>
                            <td><button className='btn bg-red-700 text-white'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;