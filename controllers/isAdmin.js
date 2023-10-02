
const isAdmin = (req, res, next) => {
    // Verificar si el usuario tiene el rol de administrador
    if (req.user && req.user.user_role === 'admin') {
      next(); // Continuar con la operación permitida
    } else {
      res.status(403).json({ error: 'Acceso denegado' });
    };
  };
  
  export default isAdmin;