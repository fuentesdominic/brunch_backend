'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsToMany(models.Restaurant, {
        through: models.Restaurant,
        foreignKey: 'restaurantId',
        as: 'restaurant_list',
      })
    }
  }
  Menu.init({
    item: DataTypes.STRING,
    price: DataTypes.STRING,
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menu',
    tableName: 'menus',
  });
  return Menu;
};