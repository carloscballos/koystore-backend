import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { Routes } from './routes/index';
import cors from 'cors'
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

//setings
const port = process.env.PORT || 4000;
app.set('port', port);

//middlewares
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error.stack);
    res.status(500).json({
        error:'Internal server error'
    });
});
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
Routes.init(app);

// to store public files
app.use('/public', express.static(path.resolve('public')));

export default app;