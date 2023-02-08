import express from 'express';
import morgan from 'morgan';
import {Routes} from './routes/index';
import cors from 'cors'
import path from 'path';

const app = express();

//setings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors())

app.use(express.json());

//routes
Routes.init(app);

// to store public files
app.use('/public', express.static(path.resolve('public')));

export default app;