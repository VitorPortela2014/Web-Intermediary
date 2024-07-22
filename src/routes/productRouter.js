// app.mjs
import { Router } from "express";
import ProductController from "../controllers/productController.js";
import UserController from "../controllers/userController.js";

const productRouter = Router();

productRouter.get("/", ProductController.getAllProducts);
// Rotas tipo post servem para receber dados e criar algo
productRouter.post("/create-product", UserController.authenticateToken, ProductController.createProduct);
// Rotas do tipo PUT ou PATCH servem para editar os dados
productRouter.put("/edit-product", UserController.authenticateToken, ProductController.editProduct);
// Rotas do tipo delete servem para deletar o código
productRouter.delete("/delete-product/:id", UserController.authenticateToken, ProductController.deleteProduct);

export default productRouter;