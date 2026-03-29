import Tenant from "../modules/tenant/tenant.model.js";

export const identifyTenant = async (req, res, next) => {
  const slug = req.headers["x-tenant"];

  if (!slug) {
    return res.status(400).send("Tenant not found");
  }

  const tenant = await Tenant.findOne({ slug });

  if (!tenant) {
    return res.status(404).send("Invalid tenant");
  }

  req.tenant = tenant;

  next();
};