const mongoose=require('mongoose')

const Cards=mongoose.Schema({
    imgUrl:String,
    title:String,
    para:String,
    link1:String,
    link2:String,
    link1text:String,
    link2text:String,
})
module.exports=mongoose.model('Cards',Cards)
