'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // product.belongsTo(models.category)
    }
  };
  product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    priceInEurocents: DataTypes.INTEGER,
    imagaeUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};