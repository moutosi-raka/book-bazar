const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const port= process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());
require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dtu3pyw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


function verifyJWT(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send('unauthoried access')
    }
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, decoded){
        if(err){
            return res.status(403).send({message: 'forbidden access'})
        }
        req.decoded = decoded;
        next();
    })
}

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

        app.get('/bookings', verifyJWT, async(req, res)=>{
            const email = req.query.email;
            const decodedEmail = req.decoded.email;
            if( email !== decodedEmail){
                return res.status(403).send({message: 'forbidden access'})
            }
            const query = {buyerEmail: email}
            const bookings = await bookingsCollection.find(query).toArray();
            res.send(bookings);
        })

        app.post('/bookings', async(req, res)=>{
            const booking = req.body;
            const result = await bookingsCollection.insertOne(booking);
            res.send(result);
        })

        app.post('/all-user-info', async(req,res)=>{
            const userInfo = req.body;
            const result = await allUsersCollection.insertOne(userInfo);
            res.send(result);
        })

        app.get('/all-user-info', async(req, res)=>{
            const query = {};
            const buyerUser = await allUsersCollection.find(query).toArray();
            res.send(buyerUser);
        })

        app.get('/all-user-info/admin/:email', async(req, res)=>{
            const email = req.params.email;
            const query = {userEmail: email};
            const user = await allUsersCollection.findOne(query);
            res.send({isAdmin: user?.role === 'admin'});
        })
        app.get('/all-user-info/seller/:email', async(req, res)=>{
            const email = req.params.email;
            const query = {userEmail: email};
            const user = await allUsersCollection.findOne(query);
            res.send({isSeller: user?.role === 'seller'});
        })

        app.get('/all-user-info/role', async(req,res)=>{
            const role = req.query.role;
            const query = {role: role}
            const buyerUser = await allUsersCollection.find(query).toArray();
            res.send(buyerUser)
        })
        app.put('/user-info/role/:id', verifyJWT, async(req,res)=>{
            const decodedEmail = req.decoded.email;
            const query = {userEmail: decodedEmail};
            const user = await allUsersCollection.findOne(query);
            if(user?.role !== 'admin'){
                return res.status(403).send({message: 'forbidden access'})
            }
            const id = req.params.id;
            const filter = {_id: ObjectId(id)};
            const option = {upsert : true}
            const updateDoc ={
                $set :{
                    verify: true
                }
            }
            const result = await allUsersCollection.updateOne(filter, updateDoc, option );
            res.send(result);
        })

        app.get('/jwt', async(req,res)=>{
            const email = req.query.email;
            const query = {userEmail: email};
            const user = await allUsersCollection.findOne(query);
            if(user){
                const token = jwt.sign({email}, process.env.ACCESS_TOKEN, {expiresIn: '12h'})
                return res.send({accessToken: token})
            }
            res.status(403).send({accrsstoke: ''});
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