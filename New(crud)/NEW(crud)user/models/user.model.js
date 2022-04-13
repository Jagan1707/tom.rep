const joi = require('joi');

const Schema = {
     user : joi.object({
        name : joi.string().required(),
        email:joi.string().email().required(),
        mobileNumber:joi.number().integer().required(),
        password:joi.string().required(),
        resetLink:joi.string().required()

    })
}


module.exports=Schema