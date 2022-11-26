import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModel = ({bookProduct, setBookProduct}) => {
    const {book_name, category_name, resale_price} = bookProduct;
    const {user} = useContext(AuthContext);
    const date = format(new Date(), 'PPpp') ;
    
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const buyerName = form.buyerName.value;
        const phone = form.phone.value;
        const meetingLocation= form.location.value;
        const buyerEmail= form.email.value;
      
        const booking = {
            bookDate: date,
            category_name,
            buyerName,
            buyerEmail,
            book_name,
            price: resale_price,
            phone,
            meetingLocation
        }
        setBookProduct(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book Category: {category_name}</h3>
                    <form onSubmit={handleBooking}>
                    <input name='buyerName' type="text" defaultValue={user?.displayName} disabled className="input mb-2 input-bordered w-full " />
                    <input name='email' type="email" defaultValue={user?.email} disabled className="input mb-2 input-bordered w-full" />
                    <input name='bookName' type="text" value={book_name}
                    disabled className="input mb-2 input-bordered w-full" />
                    <input type="text" value={ resale_price}
                    name='price' 
                    disabled className="input my-2 input-bordered w-full " />
                    <input type="text" placeholder="phone" 
                    name='phone'
                    className="input mb-2 input-bordered w-full" />
                    <input type="text" placeholder="Meeting location" name='location' className="input mb-2 input-bordered w-full " />
                    <input type="text" value={date} disabled className="input mb-2 input-bordered w-full" />
                    <br></br>
                    <div className='w-full'>
                    <button className='btn w-full'>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModel;