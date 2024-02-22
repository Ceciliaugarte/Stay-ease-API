const { Property } = require("../models");

async function index(req, res) {
  const properties = await Property.findAll();
  return res.json(properties);
}

async function show(req, res) {
  const propertyId = req.params.id;
  const property = await Property.findByPk(propertyId);
  return res.json(property);
}

async function store(req, res) {
  const {
    name,
    description,
    propertyType,
    capacity,
    pricePerNight,
    address,
    phone,
    country,
    rating,
    availableDateFrom,
    availableDateTo,
    amenities,
  } = req.body;

  const newProperty = await Property.create({
    name,
    description,
    propertyType,
    capacity,
    pricePerNight,
    address,
    phone,
    country,
    rating,
    availableDateFrom,
    availableDateTo,
    amenities,
  });
  return res.json(newProperty);
}

async function update(req, res) {
  const propertyId = req.params.id;
  const {
    name,
    description,
    propertyType,
    capacity,
    pricePerNight,
    address,
    phone,
    country,
    rating,
    availableDateFrom,
    availableDateTo,
    amenities,
  } = req.body;

  await Property.update(
    {
      name,
      description,
      propertyType,
      capacity,
      pricePerNight,
      address,
      phone,
      country,
      rating,
      availableDateFrom,
      availableDateTo,
      amenities,
    },

    { where: { id: propertyId } },
  );
  return res.json("Property has been updated");
}

async function destroy(req, res) {
  const propertyId = req.params.id;
  await Property.destroy({ where: { id: propertyId } });
  return res.json("Property has been deleted");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
