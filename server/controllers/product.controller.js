const { ObjectId } = require("mongodb");
const { client } = require("../db/db.connect");


const productCollection = client.db('bookBazar').collection('allCategories');


exports.findAll = async(req, res) =>{
    const email = req.query.email;
    // const decodedEmail = req.decoded.email;
    // if( email !== decodedEmail){
    //     return res.status(403).send({message: 'forbidden access'})
    // }
    const query = {sellerEmail: email}
    const cursor = await productCollection.find(query).toArray();
    res.send(cursor)
}

exports.findDetails=  async(req, res)=>{
    const id = req.params.id;
    const query = {_id: ObjectId(id),
        paid: false,
        report: "false"
    };
    const cursor = await productCollection.findOne(query);
    res.send(cursor)
}

exports.create = async(req,res)=>{
    const seller = req.body;
    const result = await productCollection.insertOne(seller);
    res.send(result)
}


exports.removeOne = async(req, res)=>{
    const id = req.params.id;
    const filter = {_id : ObjectId(id)};
    const result = await productCollection.deleteOne(filter);
    res.send(result); 

}

exports.update =  async(req, res)=>{
    const decodedEmail = req.decoded.email;
    const query = {sellerEmail: decodedEmail};
    const user = await productCollection.findOne(query);
    // if( user?.sellerEmail !== decodedEmail){
    //     return res.status(403).send({message: 'forbidden access'})
    // }

    const id = req.params.id;
    const filter = {_id: ObjectId(id)};
    const option = {upsert : true}
    const updateDoc ={
        $set :{
            addADS: true
        }
    }
    const result = await productCollection.updateOne(filter, updateDoc, option );
    res.send(result);
}

