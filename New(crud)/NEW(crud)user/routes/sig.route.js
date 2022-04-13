const router = require('express').Router();
//const user = require('../models/sig.model');

const auth = require('../controller/Auth');

router.post('/sigin',auth.register);


router.post('/login',auth.login);

router.post('/logout/:uuid',auth.logout);

router.post('/forgetPass',auth.forgetPassword);

router.post('/resetPass',auth.resetPassword);
    

module.exports=router