import {Router, Request, Response, NextFunction} from 'express'
import {Quote} from '../database';
import * as bodyParser from 'body-parser';
export const router = Router();

var jsonParser = bodyParser.json({ type: 'application/+*json'});

router.get('/', (req: Request, res: Response) => {
	Quote.findAll().then((quotes) => {
		res.send(quotes);
	});
});

// get request with params
router.get('/complete/:id/:value', (req: Request, res: Response) => {
		Quote.findAll({ where: { id: req.params.id } }).then((quotes) => {
			(quotes[0] as any).update({ category: req.params.value }).then(()=> {
				Quote.findAll().then((quotes) => { res.send(quotes); });
			});
		});
});

// handle post requests with params
router.post('/', jsonParser, (req: Request, res: Response) => {
	Quote.create(req.body).then(() => {
		console.log(req.body);
		res.send("Quote was saved");
	})
});

