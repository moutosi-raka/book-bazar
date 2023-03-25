import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({booking}) => {
   const navigate = useNavigate();
    const {price, buyerName,_id, buyerEmail, category_id}=booking;
    const [cartError, setCartError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/api/payment/create/intent", {
          method: "POST",
          headers: { "Content-Type": "application/json"
        },
          body: JSON.stringify({ price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async(event)=>{
       event.preventDefault();

    if (!stripe || !elements) {
      return;
    }  
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        console.log('[error]', error);
        setCartError(error.message)
    }
    else{
        setCartError('');
    }

    setSuccess('');
    setProcessing(true)
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail
          },
        },
      },
    );

    if(confirmError)
    {
      setCartError(confirmError.message);
      return;
    }
    if(paymentIntent.status === "succeeded")
    {
      const payment = {
        price,
         bookingid : _id,
         buyerEmail,
         category_id,
         transactionId: paymentIntent.id
      }
      //stored payment in database
      fetch('http://localhost:5000/api/payment/create',
      {
        method: 'POST',
        headers: {
          'content-type' : 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data =>{
        console.log("payment",data)
        if(data.insertedId)
        {
          setSuccess('congrats! your payment complete');
          setTransactionId(paymentIntent.id);
          navigate('/dashboard/myorder')
        }
      })
    }
    setProcessing(false)
}

    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="btn btn-primary text-white mt-5 btn-sm" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    <p className='text-red-700 mt-3'>{cartError}</p>
    {
       success && <div>
        <p className='text-green-500'>{success}</p>
        <p>Your transaction Id <span className='font-bold'>{transactionId}</span></p>
       </div>
    }
        </div>
    );
};

export default CheckoutForm;