import { Router } from 'express';
import productControllers from '../controllers/productController.js';

const router = Router();

// Rutas para productos
router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getProductById);
router.post('/', productControllers.createProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);



export default router;
