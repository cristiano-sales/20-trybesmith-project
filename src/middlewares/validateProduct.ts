import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/http.error';

export async function validateName(req: Request, _res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) {
    throw new HttpError(400, '"name" is required');
  }
  if (typeof name !== 'string') {
    throw new HttpError(422, '"name" must be a string');
  }
  if (name.length < 3) {
    throw new HttpError(422, '"name" length must be at least 3 characters long');
  } 
  next();
}

export async function validateAmount(req: Request, _res: Response, next: NextFunction) {
  const { amount } = req.body;
  if (!amount) {
    throw new HttpError(400, '"amount" is required');
  }
  if (typeof amount !== 'string') {
    throw new HttpError(422, '"amount" must be a string');
  }
  if (amount.length < 3) {
    throw new HttpError(422, '"amount" length must be at least 3 characters long');
  } 
  next();
}
