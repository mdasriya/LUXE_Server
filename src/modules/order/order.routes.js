import express from 'express';

const OrderRouter = express.Router();

OrderRouter.post('/create', OrderCreateController);
OrderRouter.get('/get/:orderId', OrderGetController);
OrderRouter.put('/update/:orderId', OrderUpdateController);
OrderRouter.delete('/delete/:id', OrderDeleteController);
OrderRouter.get('/', OrderGetAllController);

export default OrderRouter