const mongoose = require('mongoose');
const crypto = require('crypto');

const vehicleSchema = new mongoose.Schema({
    uuid : {type:String, required:false},
    model : {type:String,required:true,trim:true},
    color : {type:String,required:false},
    cost : {type:String,required:true},
    carImages: {type:String,required:false},
    insurance:{type:String,required:false},
    active : {type : Boolean ,required:false,default:true}
    
},
{
    timestamps: true
})


vehicleSchema.pre('save',function(next){
    this.uuid = 'vehicle'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
    console.log("uuid :",this.uuid);
    next();
});


module.exports = mongoose.model('vehicle',vehicleSchema);
