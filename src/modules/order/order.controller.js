
export const OrderCreateController = async(req,res) => {
    try {
       const order = await OrderCreateService(req.body);
       if(!order) {
        return res.status(400).json({ message: "Failed to create order" });
       }
         return res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export const OrderGetController = async(req,res) => {
const { orderId } = req.params;
    try {
       const order = await OrderGetService(orderId);
       if(!order) {
        return res.status(404).json({ message: "Order not found" });
       }
         return res.status(200).json({ message: "Order retrieved successfully", order });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export const OrderUpdateController = async(req,res) => {
  const {orderId} = req.params;
    try {
       const order = await OrderUpdateService(orderId, req.body);
       if(!order) {
        return res.status(400).json({ message: "Failed to update order" });
       }
         return res.status(200).json({ message: "Order updated successfully", data: order });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export const OrderDeleteController = async(req,res) => {
    const { id } = req.params;

    const order = await OrderDeleteService(id);
    if (!order) {
        return res.status(400).json({ message: "Failed to delete order" });
    }
    return res.status(200).json({ message: "Order deleted successfully" });
}


export const OrderGetAllController = async(req,res) => {
    const orders = await OrderGetAllService();
    if (!orders) {
        return res.status(404).json({ message: "No orders found" });
    }
    return res.status(200).json({ message: "Orders retrieved successfully", data:orders });
}