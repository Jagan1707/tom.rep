const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config;
const vehicleRoutes = require('./routes/cars.route');
const logSchema = require('./routes/sig.route');



const app = express();
app.use(cors());
//const port =process.env.PORT || 8000
app.use(express.urlencoded({extended:false}));


app.get("/",async(req,res)=>{
    console.log("it work");
    res.send(`success`);
});
//let dbUrl1='mongodb+srv://Jagan17:jagan5021@cluster0.eddpn.mongodb.net/user?retryWrites=true&w=majority';
let dbUrl2='mongodb://localhost:27017/sigin';
mongoose.connect(dbUrl2,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(data=>{
    console.log("Database connected")
}).catch(err=>{
    console.log(err.message)
    process.exit(1);
})

app.use(express.json());
app.use('/api/v1/vehicle/',vehicleRoutes);
app.use('/api/v2',logSchema);

app.listen(3000,()=>{
    console.log("server starting..........")
});



