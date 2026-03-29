import UserModel from "../user/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const loginUser = async (userData) => {
    const ExistingUser = await UserModel.findOne({ email: userData.email });
    if (!ExistingUser) {
        return null;
    }
    const isMatch = await bcrypt.compare(userData.password, ExistingUser.password);
    if (!isMatch) {
        return null;
    }
    const token = jwt.sign({ id: ExistingUser._id, role: ExistingUser.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return { user: ExistingUser, token };
};

export const registerUserService = async (userData) => {
  
  const existingUser = await UserModel.find({ email: userData.email });
  if (existingUser.length > 0) {
    return null; // or throw an error
  }

  const hashPassword = await bcrypt.hash(userData.password, 10);
  
    const data =  await UserModel.create({
     name: userData.name || null, 
     email: userData.email,
     password: hashPassword,
     role: "user",
     tenantId: userData.tenant._id
    })
    return data
 }
