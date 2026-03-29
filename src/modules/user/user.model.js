import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, unique: true, required: true},
    password:{type:String, required: true},
    role: {type: String,  default: "user"},
    tenantId: {type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true}
})

const userModel = mongoose.model("User", userSchema)

export default userModel