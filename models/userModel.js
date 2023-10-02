import { DataTypes } from 'sequelize';
import db  from '../database/database.js';

const User = db.define('users_commerces', {
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  user_role: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  user_password: {
    type: DataTypes.STRING,
  }
},{
  timestamps: false
});

export default User;