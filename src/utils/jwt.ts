import { sign, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../interfaces/user.interface';

dotenv.config();

const TOKEN_SECRET = 'secret token';

const jwtConfig: SignOptions = {
  expiresIn: '8h',
  algorithm: 'HS256',
};

const generateToken = (user: Omit<User, 'password'>) =>
  sign({ user }, TOKEN_SECRET, jwtConfig);

export default generateToken;
