import express from "express";
import { CreateCartController, DeleteCartController, GetAllCartController, GetCartController, UpdateCartController } from "./cart.controller.js";

const CartRouter = express.Router();

CartRouter.post("/create", CreateCartController);
CartRouter.get("/get", GetCartController);
CartRouter.put("/update/:id", UpdateCartController);
CartRouter.delete("/delete/:id", DeleteCartController);
CartRouter.get("/all", GetAllCartController);

export default CartRouter;