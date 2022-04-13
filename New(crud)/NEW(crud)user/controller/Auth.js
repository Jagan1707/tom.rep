const user =require('../models/sig.model');
//const user =require('../models/user.model');

const bcrypt = require('bcrypt');
const  jwt = ("jsonwebtoken");

const register = async(req,res,next)=>{
   return await bcrypt.hash(req.body.password,10,function(err,hashedpass){
        if(err){
            res.json(error.message);
        }
        let data = new user({
            name : req.body.name,
            email:req.body.email,
            mobileNumber:req.body.mobileNumber,
            password:hashedpass
        })
        data.save()
        .then(data=>{
           return res.json({message:"userDetails are successfully added! "});
        }).catch(err=>{
            res.json({'error':err.message});
        })
    })
}

const login = (req,res,next)=>{
    var username = req.body.username
    var password = req.body.password
    user.findOne({$or : [{email:username},{phone:username}]}).then(data=>{
        if(data){
            bycrpt.campare(password,data.password,function(err,result){
                if(err){
                    res.json(err.message);
                }
                if(result){
                    let token = jwt.substring({name:data.name},'secretkey',{expiresIn:'1hr'})
                    res.json({
                        message:'login successful!',
                        token
                    })
                }else{
                    res.json({
                            message:'password does notmatched please enter the correct password'
                    })
                }
            })
        }else{
            res.json({
                message:'user not found!'
            })
        }
    })

}

const logout = async (req,res,next)=> {
    try{
        await user.findOneAndUpdate({uuid:req.params.uuid},{new:true}).exec();
        return res.json({'status':'sucsess',message:'logout success'});
    }catch(err){
        res.json({status:'failure',message:err.message}); 
    }


}

const forgetPassword=(req,res,next)=>{
    const email = req.body.email;
    user.findOne({email:data.email}).then(err,data=>{
        if(err || !data){
            return res.json({error:'user does not exists with that email',message:err.message});
        }
        user.save().then(result=>{
            let token = jwt.substring({name:data.name},'secretkey',{expiresIn:'30m'})
                    res.json({
                        message:'you requested for password reset',
                        token
                    })
             return  user.updateOne({resetLink:token},(err,sucess)=>{
                 if(err){
                    return res.json({'error':err.message});
                 }else{
                     res.json({'resetLink':resetLink})
                 }
             })       
         

        })
    })

}

const resetPassword = (req,res,next)=>{
    const {resetLink,newPass}=req.body
    if(resetLink){
        jwt.verify(resetLink,'secretkey',(err,decodedData)=>{
            if(err){
              return res.json({'error':'Incorrect token or it is expired.'});
            }
            user.findOne({resetLink},(err,data)=>{
                if(err || !data){
                return res.json({'error':'user with this token does not exist.'})
                }
            })
        })
    }else{
        return res.json({'error':'Authentication error!!!'});
    }
}
module.exports={
    register,login,logout,forgetPassword,resetPassword
}

