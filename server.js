import express from "express";
import dotenv from "dotenv";
import authRouter from "./src/modules/auth/auth.routes.js";
import connectDB from "./src/config/db.js";
import TenantRouter from "./src/modules/tenant/tenant.routes.js";
import ProductRouter from "./src/modules/product/product.routes.js";
import CartRouter from "./src/modules/cart/cart.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Welcome to the Multitenant E-commerce API");
})

// auth routes
app.use('/api/v1/auth', authRouter)
// tenant routes
app.use('/api/v1/tenants', TenantRouter)

// product routes
app.use('/api/v1/products', ProductRouter)

// cart routes
app.use('/api/v1/cart', CartRouter)


let PORT = process.env.PORT || 8080;

app.listen(PORT, async() => {
    try {
        await connectDB();
        console.log(`database connected successfully`);
        console.log(`Server is running on http://localhost:${PORT}`);
        
    } catch (error) {
        console.error(`Error occurred while starting the server: ${error.message}`);
    }
});
