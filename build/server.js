"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const data_1 = require("./data/data");
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiGetTourDetail_1 = require("./api/tours/apiGetTourDetail");
console.log(JSON.parse(JSON.stringify(data_1.DataStore.tours)));
app.get('/', apiGetTours_1.apiGetTours);
app.get('/tours/:id', apiGetTourDetail_1.apiGetTourDetail);
//app.post('/tours:id',apiGetTourDetail)
app.listen(process.env.PORT || 8091, () => {
    console.log("Server started");
});
