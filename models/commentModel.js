import db  from '../database/database.js';
import { DataTypes } from "sequelize";
import Product from './productModel.js';

const Comment = db.define('comments_commerces', {
  user_name: {
    type: DataTypes.STRING(55)
  },
  products_id: {
    type: DataTypes.INTEGER
  }
},{
  timestamps: false
});

Comment.belongsTo(Product, {foreignKey: "products_id", as: 'Comment'})

export default Comment;