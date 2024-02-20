require("dotenv").config();

async function runAllSeeders() {
  try {
    await require("./userSeeder")();
    await require("./propertySeeder")();
    await require("./commentSeeder")();
    await require("./reservationSeeder")();
    await require("./photoSeeder")();
    console.log("Tables were created!");
  } catch (error) {
    console.error("Error creating tables", error);
  }
}

runAllSeeders();
