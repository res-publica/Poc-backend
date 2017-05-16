"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../database");
const bodyParser = require("body-parser");
exports.router = express_1.Router();
var jsonParser = bodyParser.json({ type: 'application/+*json' });
exports.router.get('/', (req, res) => {
    database_1.Quote.findAll().then((quotes) => {
        res.send(quotes);
    });
});
// get request with params
exports.router.get('/complete/:id/:value', (req, res) => {
    database_1.Quote.findAll({ where: { id: req.params.id } }).then((quotes) => {
        quotes[0].update({ category: req.params.value }).then(() => {
            database_1.Quote.findAll().then((quotes) => { res.send(quotes); });
        });
    });
});
// handle post requests with params
exports.router.post('/', jsonParser, (req, res) => {
    database_1.Quote.create(req.body).then(() => {
        console.log(req.body);
        res.send("Quote was saved");
    });
});
