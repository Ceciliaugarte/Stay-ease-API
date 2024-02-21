const publicRoutes = require("./publicRoutes");
const userRoutes = require("./userRoutes");
const propertyRoutes = require("./propertyRoutes");
const reservationRoutes = require("./reservationRoutes");
const commentRoutes = require("./commentRoutes");
const photoRoutes = require("./photoRoutes");

module.exports = (app) => {
  app.use("/", publicRoutes);
  app.use("/user", userRoutes);
  app.use("/property", propertyRoutes);
  app.use("/reservation", reservationRoutes);
  app.use("/comment", commentRoutes);
  app.use("/photo", photoRoutes);
};
