
let { urlencoded } = require('express')
let express = require('express')
let app = express()
app.use(express,urlencoded({extended: false}))


app.get('/',function(req, res) {
  res.send(`hello Welcome to our pages

  <form action ="/action" method="post">
  <h1>calculator</h1>
  <body>
  <p>What is the answer 2+2?</p>
  <input name = "answer" autocomplete="off"></body>
  <button>submit</button>
  
  `)
})

app.post('/action',function(req,res){
   if(req.body.answer == 4){
     res.send(`<p>congrate it a correct answer</p>`)
   }else{
     res.send(`<p>it's a wrong answer</p>`)
   }
 })


app.listen(3000)