import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/httpError.utils';

function validations(parameter: string, reqbody: string, len: number) {
  if (!reqbody) {
    throw new HttpError(400, `"${parameter}" is required`);
  }
  if (typeof reqbody !== 'string') {
    throw new HttpError(422, `"${parameter}" must be a string`);
  }
  if (reqbody.length < len) {
    throw new HttpError(422, `"${parameter}" length must be at least 3 characters long`);
  } 
}

interface Level {
  level: number;
}

function levelValidate(reqbody: Level) {
  if (!('level' in reqbody)) {
    throw new HttpError(400, '"level" is required');
  }
  if (typeof reqbody.level !== 'number') {
    throw new HttpError(422, '"level" must be a number');
  }
  if (reqbody.level < 1) {
    throw new HttpError(422, '"level" must be greater than or equal to 1');
  } 
}

function passwordValidate(reqbody: string) {
  if (!reqbody) {
    throw new HttpError(400, '"password" is required');
  }
  if (typeof reqbody !== 'string') {
    throw new HttpError(422, '"password" must be a string');
  }
  if (reqbody.length < 8) {
    throw new HttpError(422, '"password" length must be at least 8 characters long');
  } 
}

export default function userValidate(req: Request, _res: Response, next: NextFunction) {
  validations('username', req.body.username, 3);
  validations('classe', req.body.classe, 3);
  levelValidate(req.body);
  passwordValidate(req.body.password);
  next();
}
