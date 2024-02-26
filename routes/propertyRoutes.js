const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");
const { expressjwt: checkJwt } = require("express-jwt");
const checkToken = checkJwt({
  secret: process.env.JWT_SECRET,
  algorithms: [process.env.JWT_ALGORITHMS],
});

router.get("/", propertyController.index);
router.get("/:id", propertyController.show);

router.use(checkToken);

router.post("/", propertyController.store);
router.patch("/:id", propertyController.update);
router.delete("/:id", propertyController.destroy);

module.exports = router;
