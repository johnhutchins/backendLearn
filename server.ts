import express from "express"
import { DataStore } from "./data/data"
const app = express()

console.log(JSON.stringify(DataStore.tours))

app.get('/',(req,res,next)=>{
    res.send("GET REQUEST\nJohn's Backend API, v1")
})

app.get('/tours', (req,res,next)=>{
    res.send("GET REQUEST for tours endpoint \nGET on the tours endpoint")
})

app.post('/tours',(req,res,next)=>{
    res.send("POST REQUEST FOR tours endpoint \nPOST on the tours endpoint")
})

app.listen(process.env.PORT || 8091, () =>{
    console.log("Server started")
})