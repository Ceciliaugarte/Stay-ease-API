const db = require("./models");

async function createDBTables() {
  await db.sequelize.sync({ force: true });
  console.log("Tables were successfully created!");
}

createDBTables();
