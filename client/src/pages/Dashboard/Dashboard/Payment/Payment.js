import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    

    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    const {book_name, price, bookDate}=booking;
    return (
        <div className='text-white'>
            <h1 className='text-3xl f-family-abril fw  my-8'>Payment for {book_name}</h1>
            <p>Please pay <strong>{price}</strong> for your booking {bookDate}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;