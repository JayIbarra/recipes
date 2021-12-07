const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Recipe model
class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        isURL: true,
      },
    },
=======
        isURL: true
      }
    }
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;
