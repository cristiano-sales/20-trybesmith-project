import express from 'express';
import 'express-async-errors';
import productsRouter from './routes/products.routes';
import userRouter from './routes/user.route';
import ordersRouter from './routes/orders.routes';
import httpErrorMiddleware from './middlewares/httpError.middleware';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', userRouter);

app.use('/orders', ordersRouter);

app.use('/users', userRouter);

app.use(httpErrorMiddleware);

export default app;
