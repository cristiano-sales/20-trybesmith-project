import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import { validateName, validateAmount } from '../middlewares/validateProduct.middleware';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAll);
router.post('/', validateName, validateAmount, productsController.createProduct);

export default router;
