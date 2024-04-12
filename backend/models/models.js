const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'User' },
});

const Liked = sequelize.define('liked', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const LikedApartments = sequelize.define('liked_apartments', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Apartments = sequelize.define('apartments', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const ApartmentsInfo = sequelize.define('apartments_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false },
  squere: { type: DataTypes.STRING, allowNull: false },
  squere_living: { type: DataTypes.STRING, allowNull: false },
  squere_kitchen: { type: DataTypes.STRING, allowNull: false },
  floor: { type: DataTypes.STRING, allowNull: false },
  bathroom: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Liked);
Liked.belongsTo(User);

Liked.hasMany(LikedApartments);
LikedApartments.belongsTo(Liked);

Type.hasMany(Apartments);
Apartments.belongsTo(Type);

Apartments.hasMany(LikedApartments);
LikedApartments.belongsTo(Apartments);

Apartments.hasMany(ApartmentsInfo, { as: 'info' });
ApartmentsInfo.belongsTo(Apartments);

module.exports = {
  User,
  Liked,
  LikedApartments,
  Apartments,
  ApartmentsInfo,
  Type,
};
