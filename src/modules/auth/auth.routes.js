import express from "express";
import {login, registerController} from './auth.controller.js'
import { identifyTenant } from "../../middleware/tenant.middleware.js";

const authRouter = express.Router();

authRouter.post('/login', login)
authRouter.post('/register', identifyTenant, registerController)

export default authRouter
