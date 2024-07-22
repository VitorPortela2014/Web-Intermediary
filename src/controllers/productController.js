import { Product } from '../models/product.js';

export default class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await Product.find();
            return res.json({ products });
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching products', error });
        }
    }

    static async createProduct(req, res) {
        try {
            const { name, description, quantity } = req.body;
            const product = new Product({ name, description, quantity });
            const createdProduct = await product.save();
            return res.json({ message: 'Criado com sucesso!', data: createdProduct });
        } catch (error) {
            return res.status(500).json({ message: 'Error creating product', error });
        }
    }

    static async editProduct(req, res) {
        try {
            const { _id, name, quantity, description } = req.body;
            const product = await Product.findById(_id);
            if (!product) {
                return res.status(404).json({ message: 'Não existe um produto com este id!' });
            }
            product.name = name;
            product.quantity = quantity;
            product.description = description;
            const updatedProduct = await product.save();
            return res.json({ message: 'Editado com sucesso!', data: updatedProduct });
        } catch (error) {
            return res.status(500).json({ message: 'Error editing product', error });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const deletedProduct = await Product.findByIdAndDelete(id);
            if (!deletedProduct) {
                return res.status(404).json({ message: 'Não existe um produto com este id!' });
            }
            return res.json({ message: 'Deletado com sucesso!' });
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting product', error });
        }
    }
}
