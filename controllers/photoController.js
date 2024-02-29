const { Photo, Property } = require("../models");
const formidable = require("formidable");

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
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    try {
      const newPhoto = await Photo.create({
        propertyId: fields.propertyId,
        url: files.url.newFilename,
      });
      return res.json(newPhoto);
    } catch {
      console.log(err);
    }
  });
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
