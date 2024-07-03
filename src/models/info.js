const mongoose=require('mongoose')

const Info=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String
})


module.exports=mongoose.model('Info',Info)