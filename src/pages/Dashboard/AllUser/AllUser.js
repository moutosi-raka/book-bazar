import { useQuery } from '@tanstack/react-query';
import React from 'react';


const AllUser = () => {
    const role = 'buyer';
    const {data: buyerUser = []} = useQuery({
        queryKey: ['all-user-info', role],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/all-user-info?role=${role}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl f-family-abril fw  my-8'>All Buyer List</h1>
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
                        {
                            buyerUser.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i+1}</th>
                                <td>{buyer.userName}</td>
                                <td>{buyer.userEmail}</td>
                                <td><button className='btn bg-red-700 text-white'>Delete</button></td>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;