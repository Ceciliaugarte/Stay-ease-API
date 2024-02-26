const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getToken(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.json("Wrong credentials!");
  const verifyPassword = await bcrypt.compare(req.body.password, user.password);
  if (!verifyPassword) res.json("Wrong credentials!");
  const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
  res.json({ token });
}

module.exports = {
  getToken,
};
