import { Pool } from 'mysql2/promise';
import OrdersInterface from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<OrdersInterface[]> {
    const result = await this.connection
      .execute(
        `SELECT o.id, o.userId, p.id as productsIds 
           FROM Trybesmith.Orders as o
           INNER JOIN 
           Trybesmith.Products as p ON o.id = p.orderId;`,
      );
    const [rows] = result;
    return rows as OrdersInterface[];
  }
}
