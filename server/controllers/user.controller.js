const { ObjectId } = require("mongodb");
const { client } = require("../db/db.connect");


const allUsersCollection =  client.db('bookBazar').collection('allusersInfo');



exports.findAll = async(req, res)=>{
    const query = {};
    const buyerUser = await allUsersCollection.find(query).toArray();
    res.send(buyerUser);
}

exports.findOne = async(req, res)=>{
    const email = req.params.email;
    const query = {userEmail: email};
    const user = await allUsersCollection.findOne(query);
    res.send(user);
}

exports.create = async(req,res)=>{
    const userInfo = req.body;
    const result = await allUsersCollection.insertOne(userInfo);
    res.send(result);
}



exports.verify = async(req,res)=>{
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
}

exports.removeOne =   async(req, res)=>{
    const id = req.params.id;
    const filter = {_id : ObjectId(id)};
    const result = await allUsersCollection.deleteOne(filter);
    res.send(result); 
}

exports.findUserType = async(req,res)=>{
    const role = req.query.role;
    const query = {role: role}
    const buyerUser = await allUsersCollection.find(query).toArray();
    res.send(buyerUser)
}






