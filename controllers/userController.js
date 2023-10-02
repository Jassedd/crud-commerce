import userModel from '../models/userModel.js';

// Obtener todos los usuarios
const getAllUsers = async (_req, res) => {
  try {
    const users = await userModel.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// Obtener un usuario por su ID
const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  const { first_name, last_name, user_role, email, user_password } = req.body;
  try {
    const newUser = await userModel.create({
      first_name,
      last_name,
      user_role,
      email,
      user_password,
    });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Actualizar un usuario por su ID
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { first_name, last_name, role, email, user_password } = req.body;
  try {
    const user = await userModel.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    user.first_name = first_name;
    user.last_name = last_name;
    user.role = role;
    user.email = email;
    user.user_password = user_password;
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario por su ID
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await user.destroy();
    res.json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

const userControllers = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

export default userControllers
