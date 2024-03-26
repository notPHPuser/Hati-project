const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Apartment = sequelize.define('apartment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rooms: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER },
  description: { type: DataTypes.STRING },
  photo: { type: DataTypes.CHAR },
  type: { type: DataTypes.STRING },
  square: { type: DataTypes.INTEGER },
  squareLiving: { type: DataTypes.INTEGER },
  squareKitchen: { type: DataTypes.INTEGER },
  floor: { type: DataTypes.INTEGER },
  Bathroom: { type: DataTypes.STRING },
});

module.exports = { Apartment };
