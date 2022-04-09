const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config;
const vehicleRoutes = require('./routes/cars.route');



const app = express();
app.use(cors());
//const port =process.env.PORT || 8000
app.use(express.urlencoded({extended:false}));


app.get("/",async(req,res)=>{
    console.log("it work");
    res.send(`success`);
});

mongoose.connect('mongodb+srv://Jagan17:jagan5021@cluster0.eddpn.mongodb.net/myApp?retryWrites=true&w=majority',{
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

app.listen(3000,()=>{
    console.log("server starting..........")
});



