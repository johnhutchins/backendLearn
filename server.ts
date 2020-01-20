import express from "express"
const app = express()

import { DataStore } from "./data/data"
import { apiGetTours } from "./api/tours/apiGetTours"

console.log(JSON.parse(JSON.stringify(DataStore.tours)))

app.get('/', apiGetTours)

app.get('/tours', (req,res,next)=>{
    res.send(DataStore.tours)
})

app.post('/tours',(req,res,next)=>{
    res.send("POST REQUEST FOR tours endpoint \nPOST on the tours endpoint")
})

app.listen(process.env.PORT || 8091, () =>{
    console.log("Server started")
})