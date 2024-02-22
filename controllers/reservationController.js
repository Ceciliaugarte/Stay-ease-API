const { Reservation, User } = require("../models");

async function index(req, res) {
  const reservations = await Reservation.findAll({ include: User });
  return res.json(reservations);
}

async function show(req, res) {
  const reservationId = req.params.id;
  const reservation = await Reservation.findByPk(reservationId, { include: User });
  return res.json(reservation);
}

async function store(req, res) {
  const { checkInDate, checkOutDate, status, totalPrice, propertyId, userId } = req.body;
  const newReservation = await Reservation.create({
    checkInDate,
    checkOutDate,
    status,
    totalPrice,
    propertyId,
    userId,
  });
  return res.json(newReservation);
}

async function update(req, res) {}

async function destroy(req, res) {}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
