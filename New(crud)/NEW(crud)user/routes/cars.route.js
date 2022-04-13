const router = require('express').Router();
const { json } = require('express/lib/response');
const vehicleSchema= require("../models/cars.model");

 
router.post("/addvehicles",async(req,res)=>{
    try{
        const data = new vehicleSchema(req.body);
        const result =await data.save();
        return res.status(200).json({'status':'success','message':'veihcle details added successfully'}) 

    }catch(error){
        console.log(error.message);
        res.status(400).json({'status':'failure','message':error.message})

    }
});

router.get("/getVehicle",async(req,res)=>{
    try{
    const vehicleDetails = await vehicleSchema.find().exec();
    if(vehicleDetails.length > 0){
        return res.status(200).json({'status': 'success', message: "you will get vehicles details", 'result': vehicleDetails});
    }else{
        return res.status(404).json({'status': 'failure', message: "vehicle details you will not submited"})
    }
}catch(error){
    console.log(error.message);
    return res.status(400).json({'status':'failure',message:error.message})
}

})
router.get("/getIndVehicle/:id", async(req,res)=>{
    
    try{
        const vehicleDetails = await vehicleSchema.findById(req.params.id);
    if(vehicleDetails){
        return res.status(200).json({'status': 'success', message: "vehicle details submited", 'result': vehicleDetails});
    }else{
        return res.status(404).json({'status': 'failure', message: "vehicle details not submited"});
    }
     }catch(error){
        console.log(error.message);
        return res.status(400).json({'status':'failure',message:error.message})
    }
});

router.put("/getUpdate",async(req,res)=>{
try{
    const contain = {"uuid": req.query.uuid};
    const updateDetail = req.body.updateDetail;
    const rule = {new : true};
    const data = await vehicleSchema.findOneAndUpdate(contain,updateDetail,rule).exec(); 
    return res.status(200).json({'status': 'success', message: "vehicle details updated", 'result': data});

}catch(error){
    return res.status(400).json({'status':'failure',message:error.message})
}
});

router.delete("/deleteVehicle/:id",async(res,req)=>{
    try{
        console.log(req.params.id)
        await vehicleSchema.findByIdAndDelete(req.params.id);
        return res.status(200).json({'status':'success',message:'vehicle details are deleted sucessfully '})
    }catch(error){
        console.log(error.message)
        return res.status(400).json({'status':'failure',message:error.message})
    }
})




module.exports = router;
