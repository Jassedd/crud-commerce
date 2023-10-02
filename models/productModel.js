import { DataTypes } from 'sequelize';
import db  from '../database/database.js';
import User from './userModel.js'
import Category from './categoryModel.js';

const Product = db.define('products_commerces', {

  product_image: {
    type: DataTypes.STRING(255)
  },

  title: {
    type: DataTypes.STRING(50)
  },
  product_description: {
    type: DataTypes.TEXT
  },
  brand: {
    type: DataTypes.STRING(25)
  },
  starts_product: {
    type: DataTypes.INTEGER
  },
  stock: {
    type: DataTypes.INTEGER
  },
  user_id: {
    type: DataTypes.INTEGER
  },
  category_id: {
    type: DataTypes.INTEGER
  },
},{
  timestamps: false
});

Product.belongsTo(User, {foreignKey: "user_id", as: 'User'})
Product.belongsTo(Category, {foreignKey: "category_id", as: 'Category'})


export default Product;

