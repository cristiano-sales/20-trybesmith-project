import express from 'express';
import 'express-async-errors';
import route from './routes/products.routes';
import httpErrorMiddleware from './middlewares/httpError.middleware';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use('/products', route);

app.use('/users', userRouter);

app.use(httpErrorMiddleware);

export default app;
