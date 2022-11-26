import React from 'react';
import PrimaryButtom from '../../../Components/PrimaryButton/PrimaryButtom';
import { format } from 'date-fns';

const BookingModel = ({bookProduct}) => {
    const {book_name, category_name, resale_price, original_price, location, Year_of_use } = bookProduct;
    const date = new Date();
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book Category: {category_name}!</h3>
                    <form>
                    <input type="text" placeholder="buyer name" className="input mb-2 input-bordered w-full max-w-xs" />
                    <input type="email" placeholder="email address" className="input mb-2 input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="book name" className="input mb-2 input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="price" className="input my-2 input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="phone" className="input mb-2 input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Meeting location" className="input mb-2 input-bordered w-full max-w-xs" />
                    <input type="text" defaultValue={format(date,'PPpp')} className="input mb-2 input-bordered w-full max-w-xs" />
                    <br></br>
                    <PrimaryButtom>Submit</PrimaryButtom>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModel;