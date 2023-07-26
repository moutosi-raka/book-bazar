const { ObjectId } = require("mongodb");
const { client } = require("../db/db.connect");

const reportsCollection =  client.db('bookBazar').collection('reports');
const productCollection = client.db('bookBazar').collection('allCategories');

exports.create = async(req, res)=>{
    const report = req.body;
    const result = await reportsCollection.insertOne(report);
    res.send(result);
}

exports.findAll =  async(req, res)=>{
    const query = {}
    const cursor = await reportsCollection.find(query).toArray();
    res.send(cursor)
}


exports.removeOne = async(req, res)=>{
    const productId = req.params.id;
    const filter = {_id : ObjectId(productId)};
    const result = await productCollection.deleteOne(filter);
    res.send(result); 

}


exports.update = async(req, res)=>{
          
        const id = req.params.id;
        const reportInfo = req.body;
        const filter = {_id: ObjectId(id)};
        const filter2 = {productId: id};
        const option = {upsert : true}
        const updateDoc ={
            $set :{
                report: "true",
            }
        }
        const updateDoc2 ={
            $set :{
                report: true,
            }
        }
        const result = await productCollection.updateOne(filter, updateDoc, option );
        reportsCollection.updateOne(filter2, updateDoc2, option);
        res.send(result);
    }

// exports.findAll = async(req, res)=>{
//         const report = req.query.report;
//         console.log(report)
//         const query = {report: report};
//         const cursor = await productCollection.find(query).toArray();
//         res.send(cursor)
//     }

// app.put('/category/report/:id', async(req, res)=>{
          
    //     const id = req.params.id;
    //     const reportInfo = req.body;
    //     const filter = {_id: ObjectId(id)};
    //     const option = {upsert : true}
    //     const updateDoc ={
    //         $set :{
    //             report: "true",
    //         }
    //     }
    //     const result = await bookCategoriesCollection.updateOne(filter, updateDoc, option );
    //     res.send(result);
    // })