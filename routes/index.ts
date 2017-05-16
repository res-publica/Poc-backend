import {Router, Request, Response, NextFunction} from 'express';

export const router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'Express' });
});
