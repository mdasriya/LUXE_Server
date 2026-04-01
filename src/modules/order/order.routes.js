import express from 'express';
import { OrderCreateController, OrderDeleteController, OrderGetAllController, OrderGetController, OrderUpdateController } from './order.controller.js';

const OrderRouter = express.Router();

OrderRouter.post('/create', OrderCreateController);
OrderRouter.get('/get/:orderId', OrderGetController);
OrderRouter.put('/update/:orderId', OrderUpdateController);
OrderRouter.delete('/delete/:id', OrderDeleteController);
OrderRouter.get('/', OrderGetAllController);

export default OrderRouter