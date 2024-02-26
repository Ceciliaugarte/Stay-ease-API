const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController");
const { expressjwt: checkJwt } = require("express-jwt");
const checkToken = checkJwt({
  secret: process.env.JWT_SECRET,
  algorithms: [process.env.JWT_ALGORITHMS],
});

router.get("/", photoController.index);
router.get("/:id", photoController.show);

router.use(checkToken);

router.post("/", photoController.store);
router.patch("/:id", photoController.update);
router.delete("/:id", photoController.destroy);

module.exports = router;
