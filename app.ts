import {Request, Response, Application} from 'express';
import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import * as index from './routes/index';
import * as quotes from './routes/quotes';

var allowCrossDomains = function(req: Request, res: Response, next: Function) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
}

class App {
    public express: Application;
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cookieParser());
        this.express.use(express.static(path.join(__dirname, 'public')));
        this.express.use(allowCrossDomains);


    }

    private routes(): void {
        this.express.use('/', index.router);
        this.express.use('/quotes', quotes.router);

    }
}

export default new App().express