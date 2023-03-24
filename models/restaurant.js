'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user_list',
      })
      Restaurant.hasOne(models.Menu, {
        foreignKey: 'restaurantId',
        as: 'restaurant_list',
      })
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    mile_marker: DataTypes.STRING,
    userId: { 
      type: DataTypes.INTEGER,
      references: {
      model: 'users',
      key: 'id'
    }
  }
  }, {
    sequelize,
    modelName: 'Restaurant',
    tableName: 'restaurants'
  });
  return Restaurant;
};