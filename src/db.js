const mongoose=require('mongoose')
const Detail=require('./models/Details')
const mongoURL="mongodb://localhost:27017/project"

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db=mongoose.connection;
db.on("connected",()=>{
    console.log("mongo is now connected")
    /*Detail.create({
        brandName:"Info Technical Solutions",
        brandIconUrl:"https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900",
        links:[{
            label:"Home",
            url:"/"
        },{
            label:"Services",
            url:"/services"
        },
        {
            label:"Gallery",
            url:"/gallery"
        },
        {
            label:"About",
            url:"/about"
        },
        {
            label:"Contact Us",
            url:"/contact"
        }
    ]
    })*/
})

module.exports=db;