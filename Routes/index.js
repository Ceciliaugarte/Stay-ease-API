const publicRoutes = require("./publicRoutes");
const userRoutes = require("./userRoutes");
const propertyRoutes = require("./propertyRoutes");
const reservationRoutes = require("./reservationRoutes");
const commentRoutes = require("./commentRoutes");
const photoRoutes = require("./photoRoutes");
const errorHandler = require("../middlewares/errorHandler");

module.exports = (app) => {
  app.use("/users", userRoutes);
  app.use("/properties", propertyRoutes);
  app.use("/reservations", reservationRoutes);
  app.use("/comments", commentRoutes);
  app.use("/photo", photoRoutes);
  app.use("/", publicRoutes);
  app.use(errorHandler);
};
