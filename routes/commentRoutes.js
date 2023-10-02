import express from 'express';
import commentController from '../controllers/commentController.js'; 

const router = express.Router();

// Rutas para comentarios

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

export default router;
