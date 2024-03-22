const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Post = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
});

const Apartment = sequelize.define('apartment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rooms: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER },
  description: { type: DataTypes.STRING },
  photo: { type: DataTypes.CHAR },
  type: { type: DataTypes.STRING },
  square: { type: DataTypes.INTEGER },
  kitchen: { type: DataTypes.INTEGER },
  Bathroom: { type: DataTypes.STRING },
});

module.exports = { Post };
module.exports = { Apartment };
