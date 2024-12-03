// app.mjs
import { Router } from "express";
import ProductController from "../controllers/productController.js";
import UserController from "../controllers/userController.js";

const productRouter = Router();
// UserController.authenticateToken,
productRouter.get("/", ProductController.getAllProducts);
// Rotas tipo post servem para receber dados e criar algo
productRouter.post(
    "/create-product",
    
    ProductController.createdProduct
);
// Rotas do tipo PUT ou PATCH servem para editar os dados
productRouter.put(
    "/edit-product",
    
    ProductController.editProduct
);
// Rotas do tipo delete servem para deletar o código
productRouter.delete(
    "/delete-product/:id",
   
    ProductController.deleteProduct
);
export default productRouter;