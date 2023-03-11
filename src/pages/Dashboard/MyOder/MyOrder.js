import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyOrder = () => {
    const {user} = useContext(AuthContext);
    const url = `https://book-bazar-server-moutosi-raka.vercel.app/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl f-family-abril fw  my-8 text-linear'>My Orders</h1>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Book Img</th>
        <th>Book Name</th>
        <th>price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        {
            bookings.map((book, i)=>  <tr key={book._id}>
            <th>{i+1}</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={book.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>{book.book_name}</td>
            <td>{book.price}</td>
            <th>
            { !book.paid ? <Link to={`/dashboard/payment/${book._id}`}><button className="btn btn-primary text-white btn-xs">Pay</button> </Link>: 'Paid'}
            </th>
          </tr>)
        }   
    </tbody>  
  </table>
</div>
        </div>
    );
};

export default MyOrder;