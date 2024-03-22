const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Post = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
});

module.exports = { Post };
