const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const { expressjwt: checkJwt } = require("express-jwt");
const checkToken = checkJwt({
  secret: process.env.JWT_SECRET,
  algorithms: [process.env.JWT_ALGORITHMS],
});

router.use(checkToken);

router.get("/", reservationController.index);
router.get("/:id", reservationController.show);
router.post("/", reservationController.store);
router.patch("/:id", reservationController.update);
router.delete("/:id", reservationController.destroy);

module.exports = router;
