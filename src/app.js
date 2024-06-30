const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({
    extended: true
}))

const hbs=require('hbs') 
const router=require('./routes/Main')
const Detail=require('./models/Details')
const db=require('./db')
app.use('',router)
const Slider=require('./models/Slider')


//to use images n all...we have to use /static url to access items from public folder 
app.use('/static',express.static("public"))



//template engine  
app.set('view engine','hbs')
app.set("views","views")
//to use navbar in all pages we create a partials
hbs.registerPartials('views/partials')
const PORT=process.env.PORT | 3005;
app.listen(PORT,()=>{
    console.log('server is now running')
})