import OrderModel from "./order.model"

export const OrderCreateService = async(order) => {
    const newOrder = await OrderModel.create(order)
    if(!newOrder) {
        return null
    }
    return newOrder
}

export const OrderGetService = async (orderId) => {
    const order = await OrderModel.findById(orderId);
    if (!order) {
        return null;
    }
    return order;
}

export const OrderUpdateService = async (orderId, updateData) => {
const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, updateData, { new: true })
    if (!updatedOrder) {
        return null;
    }
    return updatedOrder;
}

export const OrderDeleteService = async (orderId) => {
    const deletedOrder = await OrderModel.findByIdAndDelete(orderId);
    if (!deletedOrder) {
        return null;
    }
    return deletedOrder;
}

export const OrderGetAllService = async () => {
    const orders = await OrderModel.find();
    if (!orders) {
        return null;
    }
    return orders
}