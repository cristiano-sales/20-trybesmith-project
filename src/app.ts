import express from 'express';
import 'express-async-errors';
import route from './routes/products.routes';
import httpErrorMiddleware from './middlewares/httpError.middleware';

const app = express();

app.use(express.json());

app.use('/products', route);

app.use(httpErrorMiddleware);

export default app;
