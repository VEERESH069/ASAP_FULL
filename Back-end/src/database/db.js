const connect = require('mongoose');

const connectDB = async (url) =>{
    try{
        await connect(url);
        console.log("Connected database successfully")
    }
    catch (err){
        console.status(404).json({message:"Not connected",err})
    }
}
