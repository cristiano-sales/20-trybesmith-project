import { Request, Response } from 'express';
import ProductsService from '../services/products.services';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAll();
    res.status(200).json(products);
  };

  public createProduct = async (req: Request, res: Response) => {
    const createdProduct = await this.productsService.create(req.body);
    res.status(201).json(createdProduct);
  };
}
