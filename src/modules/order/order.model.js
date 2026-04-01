import mongoose from "mongoose";


const OrderSchema = mongoose.Schema({
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, default: 1 },
    status: { type: String, enum: ["pending", "processing", "shipped", "delivered", "cancelled"], default: "pending"},
    paymentStatus: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
    totalPrice: { type: Number, required: true },
},

{ timestamps: true, versionKey: false });

const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;