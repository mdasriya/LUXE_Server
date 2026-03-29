
import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema({
  name: {type: String,required: true},
  slug: {type: String,required: true,unique: true},
  email: {type: String,required: true,unique: true},
  domain: {type: String,required: true,unique: true}}, 
  {
  timestamps: true
});

const TenantModal = mongoose.model("Tenant", tenantSchema);

export default TenantModal;