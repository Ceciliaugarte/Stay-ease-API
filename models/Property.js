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
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.TEXT,
        },
        propertyType: {
          type: DataTypes.ENUM("house", "apartment", "guesthouse", "hotel"),
        },
        capacity: {
          type: DataTypes.INTEGER,
        },
        pricePerNight: {
          type: DataTypes.FLOAT,
        },
        country: {
          type: DataTypes.STRING,
        },
        address: {
          type: DataTypes.STRING,
        },
        phone: {
          type: DataTypes.STRING,
        },
        rating: {
          type: DataTypes.INTEGER,
          validate: {
            min: 1,
            max: 10,
          },
        },
        availableDateFrom: {
          type: DataTypes.DATE,
        },
        availableDateTo: {
          type: DataTypes.DATE,
        },
        amenities: {
          type: DataTypes.JSON,
          allowNull: false,
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
