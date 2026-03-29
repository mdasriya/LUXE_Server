import CartModel from "./cart.model.js";

export const CreateCartService = async (cartData) => {

     const cartData = await CartModel.create(cartData);
     if (!cartData) {
      throw new Error("Failed to create cart item");
     }  

     return cartData;
}

export const GetCartService = async (CardId) => {
    const cartData = await CartModel.findOne({ _id: CardId });

    if (!cartData) {
        throw new Error("Cart item not found");
    }

    return cartData;
}

export const UpdateCartService = async (id, updateData) => {
    const cartData = await CartModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!cartData) {
        throw new Error("Failed to update cart item");
    }

    return cartData;
}

export const DeleteCartService = async (id) => {
    const cartData = await CartModel.findByIdAndDelete(id);
    if (!cartData) {
        throw new Error("Failed to delete cart item");
    }
    return cartData;

}



export const GetAllCartService = async () => {
    const cartData = await CartModel.find();    
    if (!cartData) {
        return null;
    }
    return cartData;
}
