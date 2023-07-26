const { ObjectId } = require("mongodb");
const { client } = require("../db/db.connect");

const bookingsCollection = client.db('bookBazar').collection('bookings');


exports.findAll =  async(req, res)=>{
    const email = req.query.email;
    // const decodedEmail = req.decoded.email;
    // if( email !== decodedEmail){
    //     return res.status(403).send({message: 'forbidden access'})
    // }
    const query = {buyerEmail: email}
    const bookings = await bookingsCollection.find(query).toArray();
    res.send(bookings);
}

exports.findDetails =  async(req, res)=>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const result = await bookingsCollection.findOne(query);
    res.send(result);
   }

exports.create = async(req, res)=>{
    const booking = req.body;
    const result = await bookingsCollection.insertOne(booking);
    res.send(result);
}