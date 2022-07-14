import { Request, Response } from 'express';
import UsersService from '../services/users.service';
import generateToken from '../utils/jwt';

class UserController {
  constructor(private usersService = new UsersService()) { }

  public createUser = async (req: Request, res: Response) => {
    const user = await this.usersService.create(req.body);
    const token = generateToken(user);
    res.status(201).json({ token });
  };
}

export default UserController;
