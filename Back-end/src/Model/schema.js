const {model,Schema} = require('mongoose')

const Username = new Schema({
    name:{
        type:String,
        require : true
    },
    email: { type: String, required: true },
  address: [{ type: String }],

})

const User = model('User',Username);
module.exports = User;
