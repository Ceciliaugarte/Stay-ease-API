const { User } = require("../models");
const bcrypt = require("bcryptjs");
const formidable = require("formidable");

async function index(req, res) {
  const users = await User.findAll();
  return res.json(users);
}

async function show(req, res) {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  return res.json(user);
}

async function store(req, res) {
  const { firstname, lastname, email, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    role,
  });
  return res.json(newUser);
}

async function update(req, res) {
  const userId = req.params.id;
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    try {
      const { firstname, lastname, email, role } = fields;
      await User.update(
        {
          firstname,
          lastname,
          email,
          role,
          avatar: files.avatar.newFilename,
        },
        { where: { id: userId } },
      );
      return res.json("User has been updated");
    } catch (error) {
      console.log(error);
    }
  });
}

async function destroy(req, res) {
  const userId = req.params.id;
  await User.destroy({ where: { id: userId } });
  return res.json("User has been deleted");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
