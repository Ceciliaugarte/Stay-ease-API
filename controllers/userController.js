const { where } = require("sequelize");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

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
  const { firstname, lastname, email, role } = req.body;
  await User.update(
    {
      firstname,
      lastname,
      email,
      role,
    },
    { where: { id: userId } },
  );
  return res.send("User was updated");
}

async function destroy(req, res) {
  const userId = req.params.id;
  await User.destroy({ where: { id: userId } });
  return res.send("User was deleted");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
