import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/httpError.utils';

const httpErrorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as HttpError;
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;
