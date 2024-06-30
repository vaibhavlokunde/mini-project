const mongoose=require('mongoose')

const Data=mongoose.Schema({
    email:String,
    phone:Number,
    query:String,
})


module.exports=mongoose.model('Data',Data)

