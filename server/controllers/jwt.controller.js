const { client } = require("../db/db.connect");
const jwt = require('jsonwebtoken');

const allUsersCollection =  client.db('bookBazar').collection('allusersInfo');


exports.findOne = async(req,res)=>{
    const email = req.query.email;
    const query = {userEmail: email};
    const user = await allUsersCollection.findOne(query);
    if(user){
        const token = jwt.sign({email}, process.env.ACCESS_TOKEN, {expiresIn: '12h'})
        return res.send({accessToken: token})
    }
    res.status(403).send({accrsstoke: ''});
}

