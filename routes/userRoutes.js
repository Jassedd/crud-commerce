import { Router } from 'express';
import userControllers from '../controllers/userController.js';
import isAdmin from '../controllers/isAdmin.js';

const router = Router();
// Ruta para obtener todos los usuarios (requiere ser administrador)
router.get('/', userControllers.getAllUsers);
router.get('/:id', userControllers.getUserById);
router.post('/', userControllers.createUser);
router.put('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);
router.delete('/:id', isAdmin , userControllers.deleteUser);


export default router;
