

export const CreateProductService = async (product) => {
    try {
        const { name, description, price } = product;
        const tenantId = req.tenant._id; // Assuming tenant information is available in the request object

        // Create a new product with the tenant ID
        const newProduct = await ProductModel.create({
            name,
            description,
            price,
            tenantId
        });

       return newProduct
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const GetSingleProductService = async (productId) => {

     const product  = await ProductModel.findById(productId)
        return product

}

export const GetAllProductsService = async () => {
    const products = await ProductModel.find();
    return products;
}


export const UpdateProductService = async (productId, updateData) => {

    const updatedProduct = await ProductModel.findByIdAndUpdate(productId, updateData, { new: true });
    return updatedProduct;
}


export const DeleteProductService = async (productId) => {
    await ProductModel.findByIdAndDelete(productId);
    return true;
}