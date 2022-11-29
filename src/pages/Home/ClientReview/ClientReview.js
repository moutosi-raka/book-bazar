import React from 'react';
import ClientCart from './ClientCart';

const ClientReview = () => {
    const clients = [
        {
            id: 1,
            name: 'Korim',
            review: "This website is very good. I buy so many book in this website. Seller are also relevent. ",
            img: "https://i.ibb.co/Q6QHv7x/client1.jpg"
        },
        {
            id: 2,
            name: 'Sazzad',
            review: "This website is very good. I buy so many book in this website. Seller are also relevent. ",
            img: "https://i.ibb.co/2g5npkf/client2.jpg"
        },
        {
            id: 3,
            name: 'Selim',
            review: "This website is very good. I buy so many book in this website. Seller are also relevent. ",
            img: "https://i.ibb.co/Q6QHv7x/client1.jpg"
        }
   ]
    return (
        <div>
            <h1 className='my-20 text-3xl font-bold'>Client Review</h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
            {
                clients.map(client => <ClientCart
                    client={client}
                    key={client.id}
                ></ClientCart>)
            }
            </div>
        </div>
    );
};

export default ClientReview;