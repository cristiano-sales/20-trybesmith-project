import connection from '../models/connection';
import ProductModel from '../models/products.models';
import { Product } from '../interfaces/product.interface';

export default class ProductsService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: Product): Promise<Product> {
    const newProduct = await this.model.newProduct(product);
    return newProduct;
  }
}
