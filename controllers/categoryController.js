import Category from '../models/categoryModel.js';

// Obtener todas las categorías
const getAllCategories = async (_req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
};

// Obtener una categoría por su ID
const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

// Crear una nueva categoría
const createCategory = async (req, res) => {
  const { title } = req.body;
  try {
    const newCategory = await Category.create({ title });
    res.json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
};

// Actualizar una categoría por su ID
const updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const { title } = req.body;
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    category.title = title;
    await category.save();
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
};

// Eliminar una categoría por su ID
const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    await category.destroy();
    res.json({ message: 'Categoría eliminada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la categoría' });
  }
};

export default {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
