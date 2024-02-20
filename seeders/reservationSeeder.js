const { Reservation } = require("../models");

module.exports = async () => {
  try {
    await Reservation.bulkCreate([
      {
        checkInDate: "2024-03-01",
        checkOutDate: "2024-03-05",
        status: "confirmed",
        totalPrice: 800,
        propertyId: 1,
        userId: 1,
      },
      {
        checkInDate: "2024-03-10",
        checkOutDate: "2024-03-15",
        status: "pending",
        totalPrice: 600,
        propertyId: 2,
        userId: 2,
      },
    ]);
    console.log("Reservations were created successfully");
  } catch (error) {
    console.error("Error creating reservations", error);
  }
};
