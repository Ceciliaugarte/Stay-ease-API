const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const hashedPassword = await bcrypt.hash("1234", 10);
  try {
    await User.bulkCreate([
      {
        firstname: "Guest",
        lastname: "User",
        email: "guest@gmail.com",
        password: hashedPassword,
        role: "guest",
      },
      {
        firstname: "Host",
        lastname: "User",
        email: "host@gmail.com",
        password: hashedPassword,
        role: "host",
      },
      {
        firstname: "Admin",
        lastname: "User",
        email: "admin@gmail.com",
        password: hashedPassword,
        role: "administrator",
      },
    ]);
    console.log("Users were created successfully");
  } catch (error) {
    console.error("Error creating users", error);
  }
};
