const { Photo, Property } = require("../models");

async function index(req, res) {
  const photos = await Photo.findAll({ include: Property });
  return res.json(photos);
}

async function show(req, res) {
  const photoId = req.params.id;
  const photo = await Photo.findByPk(photoId, { include: Property });
  res.json(photo);
}

async function store(req, res) {
  const { url, propertyId } = req.body;
  const newPhoto = await Photo.create({
    url,
    propertyId,
  });
  return res.json(newPhoto);
}

async function update(req, res) {
  const photoId = req.params.id;
  const { url, propertyId } = req.body;
  await Photo.update(
    {
      url,
      propertyId,
    },
    { where: { id: photoId } },
  );
  return res.json("The photo has been updated");
}

async function destroy(req, res) {
  const photoId = req.params.id;
  await Photo.destroy({ where: { id: photoId } });
  return res.json("The photo has been deleted");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
