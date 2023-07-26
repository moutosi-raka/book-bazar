const { client } = require("../db/db.connect");


const bookCategoriesCollection = client.db('bookBazar').collection('allCategories');


exports.findDetails = async(req, res)=>{
    const id = req.params.id;
    const query = {category_id: id,
        paid: false,
        report: "false"
    };
    const cursor = await bookCategoriesCollection.find(query).toArray();
    res.send(cursor)
}


exports.findAll = async(req, res)=>{
    let products;
    let cursor;
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const search = req.query.search;
    let query = { paid: false,
                    report: "false"
                };
      
    if(search)
    {
        bookCategoriesCollection.createIndex({book_name: "text"})
        query = {$text: {$search: search},...query}
    }

    cursor =  bookCategoriesCollection.find(query);
    const count = await cursor.count();
    products = await cursor.skip(page*size).limit(size).sort({_id:-1}).toArray();
    res.send({count, products})
}

