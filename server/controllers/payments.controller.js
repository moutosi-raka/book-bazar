const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { ObjectId } = require("mongodb");
const { client } = require("../db/db.connect");


const paymentsCollection =  client.db('bookBazar').collection('payments');
const productCollection = client.db('bookBazar').collection('allCategories');
const bookingsCollection = client.db('bookBazar').collection('bookings');


exports.create = async(req, res)=>{
    const payment = req.body;
    const result = await paymentsCollection.insertOne(payment);
    const id = payment.bookingid;
    const filter = {_id : ObjectId(id)}
    const updateDoc ={
        $set:{
            paid: true,
            transcationId: payment.transactionId
        }
    }
    const updateResult = await bookingsCollection.updateOne(filter, updateDoc);
    const categoryId = payment.category_id;
    const categoryFilter = {_id : ObjectId(categoryId)};
    const categoryUpdateDoc ={
        $set:{
            paid: true,
            transcationId: payment.transactionId
        }
    }
    const categoryUpdateResult = await productCollection.updateOne(categoryFilter, categoryUpdateDoc);
    res.send(result);
}


exports.createPyaymentIntent =  async(req, res)=>{
    const booking = req.body;
    const price = booking.price;
    const amount = price*100;
    const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount: amount,
        "payment_method_types": [
            "card"
          ]
    });
    res.send({
        clientSecret: paymentIntent.client_secret,
      });
}
