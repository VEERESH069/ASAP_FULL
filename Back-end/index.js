const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const user = require('./src/Model/schema');
const { FindCursor } = require('mongodb');
require('dotenv').config({path:'./src/Config/.env'})

const PORT = process.env.port;
const url = process.env.mongoDB;

app.use(bodyParser.json())
app.use(cors())

app.get('/user',async(req,res)=>{
    try{
        const users = await user.find();
        res.json(users);
    }
    catch (error){
        res.status(404).json({message:"Not found",err})
    }
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });