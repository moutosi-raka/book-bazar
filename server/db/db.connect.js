
const { MongoClient, ServerApiVersion } = require('mongodb');
// require('dotenv').config();



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dtu3pyw.mongodb.net/?retryWrites=true&w=majority`;
exports.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });