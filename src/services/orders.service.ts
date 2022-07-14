import OrdersInterface from '../interfaces/orders.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getAll(): Promise<OrdersInterface[]> {
    const orders = await this.model.getAll();
    
    const duplicatedIds: OrdersInterface[] = [];
    orders.forEach((order) => {
      const hasId = duplicatedIds.find((e) => e.id === order.id);
      if (!hasId) duplicatedIds.push(order);
    });

    const productIdsArray = duplicatedIds.map((l: OrdersInterface) => ({
      ...l,
      productsIds: orders.reduce((acc: any[], curr: OrdersInterface) => {
        if (curr.id === l.id && curr.productsIds) { acc.push(curr.productsIds); }
        return acc;
      }, []),
    }));
    return productIdsArray;
  }
}

export default OrdersService;
