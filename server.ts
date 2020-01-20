import express from "express"
const app = express()

app.get('/',(req,res,next)=>{
    res.send("John's Backend API, v1")
})

app.get('/tours', (req,res,next)=>{
    res.send("GET on the tours endpoint")
})

app.post('/tours',(req,res,next)=>{
    res.send("POST on the tours endpoint")
})

app.listen(process.env.PORT || 8091, () =>{
    console.log("Server started")
})