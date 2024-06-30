const mongoose=require('mongoose');

const Slider=mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String,
    class:String,//this is for the moving of slider czu it wasnt working
})

module.exports=mongoose.model('sliders',Slider)