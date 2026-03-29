
export const CreateCartController = async (req,res) => {

    try {
     const cartdata = CreateCartService(req.body) 
     if(!cartdata) {
      return res.status(400).json({ message: "Failed to create cart item" });
     }  
        return res.status(201).json({success: true, message: "Cart item created successfully", data: cartdata });
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal server error", error: error.message });
    }
}
export const GetCartController = async (req,res) => {

    try {
        const cartdata = await GetCartService(req.query)
        if(!cartdata) {
            return res.status(404).json({success:true, data:[], message: "Cart item not found" });
        }   
        return res.status(200).json({success: true, message: "Cart item retrieved successfully", data: cartdata });
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal server error", error: error.message });
    }

}

export const UpdateCartController = async (req,res) => {
   
    try {
       // Implementation for updating cart item
    const { id } = req.params;
    const updateData = req.body;
    const updatedCartItem = await UpdateCartService(id, updateData);

    if (!updatedCartItem) {
        return res.status(404).json({ success: false, message: "Cart item not found" });
    }
    return res.status(200).json({ success: true, message: "Cart item updated successfully", data: updatedCartItem });
  
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
}


export const DeleteCartController = async (req,res) => {
try {
    const { id } = req.params;
    const isDeleted = await DeleteCartService(id);
    if (!isDeleted) {
        return res.status(404).json({ success: false, message: "Cart item not found" });
    }   
    return res.status(200).json({ success: true, message: "Cart item deleted successfully" });
} catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
}
}

export const GetAllCartController = async (req,res) => {
 
    try {
        const cartData = await GetAllCartService();
        if (!cartData || cartData.length === 0) {
            return res.status(404).json({ success: true, data: [], message: "No cart items found" });
        }
        return res.status(200).json({ success: true, message: "Cart items retrieved successfully", data: cartData });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
    
}
