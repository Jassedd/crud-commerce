import Comment from '../models/commentModel.js'; 

// Obtener todos los comentarios
const getAllComments = async (_req, res) => {
  try {
    const comments = await Comment.findAll({
      model: products_id,
      as: 'Comment'
      },);
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener comentarios' });
  }
};

// Obtener un comentario por su ID
const getCommentById = async (req, res) => {
  const commentId = req.params.id;
  try {
    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({ error: 'Comentario no encontrado' });
    }
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el comentario' });
  }
};

// Crear un nuevo comentario
const createComment = async (req, res) => {
  const { user_name, comment, products_id } = req.body;
  try {
    const newComment = await Comment.create({
      user_name,
      comment,
      products_id,
    });
    res.json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el comentario' });
  }
};

// Actualizar un comentario por su ID
const updateComment = async (req, res) => {
  const commentId = req.params.id;
  const { user_name, comment, products_id } = req.body;
  try {
    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({ error: 'Comentario no encontrado' });
    }
    comment.user_name = user_name;
    comment.comment = comment;
    comment.products_id = products_id;
    await comment.save();
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el comentario' });
  }
};

// Eliminar un comentario por su ID
const deleteComment = async (req, res) => {
  const commentId = req.params.id;
  try {
    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({ error: 'Comentario no encontrado' });
    }
    await comment.destroy();
    res.json({ message: 'Comentario eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el comentario' });
  }
};

export default {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
