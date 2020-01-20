"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const data_1 = require("./data/data");
const apiGetTours_1 = require("./api/tours/apiGetTours");
console.log(JSON.parse(JSON.stringify(data_1.DataStore.tours)));
app.get('/', apiGetTours_1.apiGetTours);
app.get('/tours', (req, res, next) => {
    res.send(data_1.DataStore.tours);
});
app.post('/tours', (req, res, next) => {
    res.send("POST REQUEST FOR tours endpoint \nPOST on the tours endpoint");
});
app.listen(process.env.PORT || 8091, () => {
    console.log("Server started");
});
