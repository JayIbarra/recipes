const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Recipe model
class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
  }
)

module.exports = Recipe;