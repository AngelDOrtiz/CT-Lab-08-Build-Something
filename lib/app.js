import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import horoscopes from './controllers/horoscopes.js';

const app = express();

app.use(express.json());


app.use(horoscopes);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
