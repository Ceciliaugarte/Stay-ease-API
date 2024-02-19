const { Model, DataTypes } = require("sequelize");

class Reservation extends Model {
  static initModel(sequelize) {
    Reservation.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        checkInDate: {
          type: DataTypes.DATE,
        },
        checkOutDate: {
          type: DataTypes.DATE,
        },
        status: {
          type: DataTypes.STRING,
        },
        totalPrice: {
          type: DataTypes.FLOAT,
        },
      },
      {
        sequelize,
        modelName: "reservation",
      },
    );
    return Reservation;
  }
}

module.exports = Reservation;
