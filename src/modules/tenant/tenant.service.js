import TenantModal from "./tenant.model.js";


export const CreateTenantService = async (tenantData) => {
   
     const tenant = await TenantModal.create({
        name: tenantData.name,
        slug: tenantData.slug,
        email: tenantData.email,
        domain: tenantData.domain
     })
     return tenant;
}