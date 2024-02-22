const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.get("/", reservationController.index);
router.get("/:id", reservationController.show);
router.post("/", reservationController.store);
router.patch("/:id", reservationController.update);
router.delete("/:id", reservationController.destroy);

module.exports = router;
