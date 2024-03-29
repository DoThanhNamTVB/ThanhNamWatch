'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product_Color extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate() {
            // define association here
        }
    }
    Product_Color.init(
        {
            productId: DataTypes.INTEGER,
            colorId: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            img: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Product_Color',
        }
    );
    return Product_Color;
};
