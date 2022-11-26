import React from 'react';

const MyOrder = () => {
    return (
        <div>
            <h1 className='text-3xl f-family-abril fw  my-8'>My Oders</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;