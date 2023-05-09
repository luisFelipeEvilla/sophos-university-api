import express from 'express';
import morgan from 'morgan';
import { SERVER_PORT } from './config';

const app = express();

// middlewares
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(SERVER_PORT, () => {
    console.log('The application is listening on port 3000!');
});