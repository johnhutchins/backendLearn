import express from "express"
const app = express()

import { DataStore } from "./data/data"
import { apiGetTours } from "./api/tours/apiGetTours"
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail"

console.log(JSON.parse(JSON.stringify(DataStore.tours)))

app.get('/', apiGetTours)

app.get('/tours/:id',apiGetTourDetail)

//app.post('/tours:id',apiGetTourDetail)

app.listen(process.env.PORT || 8091, () =>{
    console.log("Server started")
})