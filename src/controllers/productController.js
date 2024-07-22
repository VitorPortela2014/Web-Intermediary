import { Product } from "../models/product.js";
export default class ProductController {
    static async getAllProducts(req, res) {
        const products = await Product.find();
        return res.json({ products });
    }
    static async createdProduct(req, res) {
        const { name, description, quantity } = req.body;
        const data = new Product();
        data.name = name;
        data.description = description;
        data.quantity = quantity;
        const createdProduct = await Product.create(data);
        return res.json({ message: "Criado com sucesso!", data: createdProduct });
    }''
    static async editProduct(req, res) {
        const { _id, name, quantity, description } = req.body;
        const product = await Product.findById(_id);
        if (!product) {
            return res.json({ message: "Não existe um produto com este id!" });
        }
        product.name = name;
        product.quantity = quantity;
        product.description = description;
        const updatedProduct = await Product.findByIdAndUpdate(_id, product, { new: true });
        return res.json({ message: "Editado com sucesso!", updatedProduct });
    }
    static async deleteProduct(req, res) {
        const { id } = req.params;
        await Product.findOneAndDelete(id);
        return res.json({ message: "Deletado com sucesso!" });
    }
}