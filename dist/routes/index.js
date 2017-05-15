"use strict";
const express_1 = require('express');
exports.router = express_1.Router();
/* GET home page. */
exports.router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
