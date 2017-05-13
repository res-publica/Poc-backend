var express = require('express');
var database = require('../database.js');

var router = express.Router();
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json({ type: 'application/+*json'});


router.get('/', (req, res) => {
	database.Quote.findAll().then((tasks) => {
		res.send(tasks);
	});
});

// get request with params
router.get('/complete/:id/:value', (req, res) => {
		database.Quote.findAll({ where: { id: req.params.id } }).then((task) => {
			task[0].update({ category: req.params.value }).then(()=> {
				database.Quote.findAll().then((quotes) => { res.send(quotes); });
			});
		});
});

// handle post requests with params
router.post('/', jsonParser, (req, res) => {
	database.Quote.create(req.body).then(() => {
		console.log(req.body);
		res.send("Quote was saved");
	})
});


module.exports = router;