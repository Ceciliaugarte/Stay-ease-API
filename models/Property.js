const { Model, DataTypes } = require("sequelize");

class Property extends Model {
  static initModel(sequelize) {
    Property.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.TEXT,
        },
        propertyType: {
          type: DataTypes.STRING,
        },
        capacity: {
          type: DataTypes.INTEGER,
        },
        pricePerNight: {
          type: DataTypes.FLOAT,
        },
        address: {
          type: DataTypes.STRING,
        },
        phone: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "property",
      },
    );
    return Property;
  }
}

module.exports = Property;
