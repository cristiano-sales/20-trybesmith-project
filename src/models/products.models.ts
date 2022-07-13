import { Pool } from 'mysql2/promise';
import { Product } from '../interfaces/product.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    // define a interface Product como tipo do retorno da função getAll e especifica que o resultado da função é uma Promise que encapsula um array de objetos do tipo Product
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Product[];
    // a palavra reservada as que faz uma adaptação (cast) do objeto row que agora passa a esperar um array de objetos da interface Product
  }
}
