const express = require('express')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("helloooo")
})


app.listen(3000,()=>{
    console.log('Server is Runing on port 3000')
})