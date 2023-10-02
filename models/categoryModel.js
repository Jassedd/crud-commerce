import  { DataTypes } from 'sequelize';
import db from '../database/database.js'

 const Category = db.define('category_commerces', {
  title: {
    type: DataTypes.STRING(50)
  }
},{
  timestamps: false
});

export default Category
