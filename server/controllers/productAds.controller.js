const { client } = require("../db/db.connect");
const bookCategoriesCollection = client.db('bookBazar').collection('allCategories');

exports.findAll = async(req, res)=>{
          
    const query = {paid: false,
                   report: "false"
                  }
    const cursor = await bookCategoriesCollection.find(query).toArray();
    res.send(cursor)
}