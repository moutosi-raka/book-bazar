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

        app.get('/category/:id', async(req, res)=>{
            const id = parseInt(req.params.id);
            const query = {category_id: id};
            const cursor = await bookCategoriesCollection.find(query).toArray();
            res.send(cursor)
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