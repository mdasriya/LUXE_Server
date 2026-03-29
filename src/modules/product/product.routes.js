import express from 'express';
import { CreateProductController, DeleteProductController, GetAllProductsController, GetSingleProductController, UpdateProductController } from './product.controller.js';

const ProductRouter = express.Router();

ProductRouter.post('/products', CreateProductController);
ProductRouter.get('/products/:id', GetSingleProductController);
ProductRouter.get('/products', GetAllProductsController);
ProductRouter.put('/products/:id', UpdateProductController);
ProductRouter.delete('/products/:id', DeleteProductController);

export default ProductRouter;