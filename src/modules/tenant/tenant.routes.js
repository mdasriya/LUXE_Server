import express from "express";
import { createTenant } from "./tenant.controller.js";

const TenantRouter = express.Router();

TenantRouter.post("/", createTenant);

export default TenantRouter;