import { Router } from 'express';
const router = Router();
import categoryController from '../controllers/categoryController.js';
import isAdmin from '../controllers/isAdmin.js';

// Rutas para categorías
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', isAdmin, categoryController.deleteCategory);

export default router;
