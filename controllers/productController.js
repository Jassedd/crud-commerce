import productModel from '../models/productModel.js';
import User from '../models/userModel.js';
import Category from '../models/categoryModel.js';

// Obtener todos los productos
const getAllProducts = async (_req, res) => {
  try {
    const products = await productModel.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

// Obtener un producto por su ID
const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productModel.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  const {
    product_image,
    title,
    product_description,
    brand,
    starts_product,
    stock,
    user_id,
    category_id,
  } = req.body;
  try {
    const newProduct = await productModel.create({
      product_image,
      title,
      product_description,
      brand,
      starts_product,
      stock,
      user_id,
      category_id,
    });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Actualizar un producto por su ID
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const {
    product_image,
    title,
    product_description,
    brand,
    starts_product,
    stock,
    user_id,
    category_id,
  } = req.body;
  try {
    const product = await productModel.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    product.product_image = product_image;
    product.title = title;
    product.product_description = product_description;
    product.brand = brand;
    product.starts_product = starts_product;
    product.stock = stock;
    product.user_id = user_id;
    product.category_id = category_id;
    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto por su ID
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productModel.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    await product.destroy();
    res.json({ message: 'Producto eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
