"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res, next) => {
    res.send("GET REQUEST\nJohn's Backend API, v1");
});
app.get('/tours', (req, res, next) => {
    res.send("GET REQUEST for tours endpoint \nGET on the tours endpoint");
});
app.post('/tours', (req, res, next) => {
    res.send("POST REQUEST FOR tours endpoint \nPOST on the tours endpoint");
});
app.listen(process.env.PORT || 8091, () => {
    console.log("Server started");
});
