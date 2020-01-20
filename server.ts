import express from "express"
const app = express()

import * as bodyparser from "body-parser"
const jsonParser = bodyparser.json()

import { apiGetTours } from "./api/tours/apiGetTours"
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail"
import { apiCreateTour } from "./api/tours/apiCreateTour"
import { apiDeleteTour } from "./api/tours/apiDeleteTour"
import { apiUpdateTour } from "./api/tours/apiUpdateTour"

import { CustomRequestHandler } from "./model/express"

const authenticator: CustomRequestHandler = (req,res,next)=>{
    console.log(new Date() + ' - ' + req.method + " Request to " + req.path)
    next()
}

//console.log(JSON.parse(JSON.stringify(DataStore.tours)))
const logger: CustomRequestHandler = (req,res,next)=>{
    console.log(new Date() + ' - ' + req.method + " Request to " + req.path)
    next()
}

app.use(authenticator)

app.use(logger)

app.get('/tours', apiGetTours)

app.get('/tours/:id',apiGetTourDetail)

app.post('/tours',jsonParser, apiCreateTour)

app.delete("/tours/:id", apiDeleteTour)

app.patch('/tours/:id', jsonParser, apiUpdateTour)

app.listen(process.env.PORT || 8091, () =>{
    console.log("Server started")
})