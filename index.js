const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port= process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());
require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dtu3pyw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
       
        const bookCategoriesCollection = client.db('bookBazar').collection('allCategories');
        const bookingsCollection = client.db('bookBazar').collection('bookings');
        const allUsersCollection =  client.db('bookBazar').collection('allusersInfo');

        app.get('/category/:id', async(req, res)=>{
            const id = parseInt(req.params.id);
            const query = {category_id: id};
            const cursor = await bookCategoriesCollection.find(query).toArray();
            res.send(cursor)
        })

        app.get('/bookings', async(req, res)=>{
            const email = req.query.email;
            const query = {buyerEmail: email}
            const bookings = await bookingsCollection.find(query).toArray();
            res.send(bookings);
        })

        app.post('/bookings', async(req, res)=>{
            const booking = req.body;
            console.log(booking);
            const result = await bookingsCollection.insertOne(booking);
            res.send(result);
        })

        app.post('/all-user-info', async(req,res)=>{
            const userInfo = req.body;
            const result = await allUsersCollection.insertOne(userInfo);
            res.send(result);
        })
    }
    finally{

    }

}
run().catch(err => console.log(err))


app.get('/', async(req,res)=>{
    res.send('book bazar server is running.....')
})

app.listen(port, ()=> console.log(`book bazar server port ${port}`))