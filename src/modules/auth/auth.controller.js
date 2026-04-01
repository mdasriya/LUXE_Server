import { loginUser, registerUserService } from "./auth.service.js"



 export const login = async(req,res) => {
    const data = await loginUser(req.body)
    res.json({status:200,data:data,success:true})
 }

export const registerController = async (req, res) => {
  try {
    const data = await registerUserService(req.body);

    if (data == null) {
      return res.status(400).json({ message: "User with this email already exists", success: false });
    }

    return res.status(200).json({status: 200, data: data, success: true });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};


