import { CreateProductService, DeleteProductService, GetAllProductsService, GetSingleProductService, UpdateProductService } from "./product.service.js";


// Create Product Controller
export const CreateProductController = async (req, res) => {
    try {
      const productData = req.body;
      const newProduct = await CreateProductService(productData);
      res.status(201).json({status: true, data: newProduct,  });  
    } catch (error) {
      res.status(400).json({ status: false, message: error.message });
    }
}

// Get Single Product Controller
export const GetSingleProductController = async (req, res) => {
 try {
    const product  = await GetSingleProductService(req.params.id);
    if (!product) {
        return res.status(404).json({ status: false, message: "Product not found" });
    }
    res.status(200).json({ status: true, data: product });
 } catch (error) {
    res.status(500).json({ status: false, message: error.message });
 }   
}

// Get All Products Controller
export const GetAllProductsController = async (req, res) => {
  try {
    const products = await GetAllProductsService();
    if (products.length === 0) {
        return res.status(404).json({ status: false, message: "No products found" });
    }
    res.status(200).json({ status: true, data: products });

  } catch (error) {
    res.status(500).json({ status: false, message: error.message });

  }
     
}


// Update Product Controller
export const UpdateProductController = async (req, res) => {
try {
   const updatedProduct = await UpdateProductService(req.params.id, req.body);
   if (!updatedProduct) {
       return res.status(404).json({ status: false, message: "Product not found" });
   }
    res.status(200).json({ status: true, data: updatedProduct }); 
} catch (error) {
    res.status(500).json({ status: false, message: error.message });
}
}


// Delete Product Controller
export const DeleteProductController = async (req, res) => {
try {
    const isDeleted = await DeleteProductService(req.params.id);
    if (!isDeleted) {
        return res.status(404).json({ status: false, message: "Product not found" });
    }
    res.status(200).json({ status: true, message: "Product deleted successfully" });
} catch (error) {
    res.status(500).json({ status: false, message: error.message });
}
}