import { CreateTenantService } from "./tenant.service.js";


export const createTenant = async (req, res) => {

    const tenant = await CreateTenantService(req.body);
    if (!tenant){
        res.status(500).json({message: "Error creating tenant"});
    }
    return res.status(201).json({success: true, message: "Tenant created successfully", tenant  });
}

