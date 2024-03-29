'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    }
    Admin.init(
        {
            userName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            gender: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            img: DataTypes.STRING,
            role: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Admin',
        }
    );
    return Admin;
};
