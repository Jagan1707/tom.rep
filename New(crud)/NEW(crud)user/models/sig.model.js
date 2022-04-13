const mongoose =require('mongoose');
const crypto = require('crypto');

const userSchema= new mongoose.Schema({
    uuid :{type:String,required : false},
    name :{type:String,required : true,trim:true},
    email :{type:String,required : true},
    mobileNumber :{type:String,required : true},
    password :{type:String,required : true},
    resetLink:{type:String,required:false}
},{
    timestamps:true
})

userSchema.pre('save',(next)=>{
    this.uuid = "REG-"+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase();
    console.log({"uuid":this.uuid});
})



module.exports= mongoose.model('user',userSchema);  