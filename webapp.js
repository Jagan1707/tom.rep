
const express = require('express');

const web = express()
 
const port =process.env.PORT ||  6000

web.get('/',async(req,res)=>{
res.send(`<h1>welcome to calculators</h1>
<form action = "/answer" method="POST">
<p>what is answer 5*5=?</P>
<input name = "answer" autocomplete ="off">
<button>submit</button>


`);
}) 
web.post('/answer',function(req,res){
    if(req.body.answer == 25){
    res.send(`this is currect  answer `);
    }else{
        res.send(`this is wrong answer please enter the currect answer`);
    }
})


web.listen(port,()=>{
    console.log('server started..... at 7000 port')
})
