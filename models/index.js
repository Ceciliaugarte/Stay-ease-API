const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  },
);

const User = require("./User");
const Property = require("./Property");
const Photo = require("./Photo");
const Reservation = require("./Reservation");
const Comment = require("./Comment");

User.initModel(sequelize);
Property.initModel(sequelize);
Photo.initModel(sequelize);
Reservation.initModel(sequelize);
Comment.initModel(sequelize);

User.hasMany(Reservation);
Reservation.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Property.hasMany(Reservation);
Reservation.belongsTo(Property);

Property.hasMany(Photo);
Photo.belongsTo(Property);

Property.hasMany(Comment);
Comment.belongsTo(Property);

module.exports = {
  sequelize,
  User,
  Property,
  Photo,
  Reservation,
  Comment,
};
