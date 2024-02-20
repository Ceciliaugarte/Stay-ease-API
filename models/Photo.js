const { Model, DataTypes } = require("sequelize");

class Photo extends Model {
  static initModel(sequelize) {
    Photo.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        url: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: "photo",
      },
    );
    return Photo;
  }
}

module.exports = Photo;
